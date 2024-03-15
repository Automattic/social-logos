#!/usr/bin/env node
const svgDir='build/svg-clean';
const codepointsFile = 'src/font/codepoints.json';
const destFontDir='build/font';
const cssFile = destFontDir + '/social-logos.css';
const woff2FontFile = destFontDir + '/social-logos.woff2';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const SVGIcons2SVGFontStream = require('svgicons2svgfont');
const svg2ttf = require('svg2ttf');
const wawoff2 = require('wawoff2');

const getCodepoint = name => {
	// If a codepoint for this name does not yet exist, create one.
	if (!codepoints[name]) {
		maxCodepoint++;
		codepoints[name] = maxCodepoint;
	}
	// Return codepoint.
	return codepoints[name];
}

const writeCodepoints = () => {
	fs.writeFile(codepointsFile, JSON.stringify(codepoints, null, 4), {encoding: 'utf8'}, err => {
		if(err) throw err;
		// console.log('Wrote codepoints file.');
	});
}

const svg2woff2 = async (fontBuffer) => {
	ttf = svg2ttf(fontBuffer.toString(), {});
	const woff2Data = await wawoff2.compress(ttf.buffer);
	fs.writeFileSync(woff2FontFile, woff2Data);
	// console.log('WOFF2 font created.');
	return Buffer.from(woff2Data);
}

const generateCSS = woff2Buffer => {
	const base64Font = Buffer.from(woff2Buffer).toString('base64');

	let cssCodepoints = '';
	for ( var name in codepoints ) {
		cssCodepoints += name + ': \\' + codepoints[name].toString(16) + '\n';
	}
	let cssContent = `@font-face {
		font-family:"social-logos";
		src: url(data:application/octet-stream;base64,${base64Font}
		) format('woff2');
		font-weight:normal;
		font-style:normal;
	}
	
	/*
	${cssCodepoints}*/`;
	fs.writeFile( cssFile, cssContent, () => {} );

	// console.log('Wrote CSS file.');
}

// Make dir if it doesn't exist.
if (!fs.existsSync(destFontDir)){
	fs.mkdirSync(destFontDir, { recursive: true });
}

let codepoints = require( path.resolve(codepointsFile) );
let maxCodepoint = Math.max(...Object.values(codepoints))

let fontBuffer = Buffer.alloc(0);

const fontStream = new SVGIcons2SVGFontStream({
  fontName: 'social-logos',
	descent: 0,
	normalize: true,
	fontHeight: 300,
	log: () => {} // suppress default log messages
});

fontStream
	.on('data', data => {
		// This concats to the font buffer each time a glyph is written.
		fontBuffer = Buffer.concat([fontBuffer, data]);
	})
	.on('finish', async function () {
		woff2Buffer = await svg2woff2(fontBuffer);
		generateCSS(woff2Buffer);
		writeCodepoints();
		console.log(`Created font files in '${destFontDir}'.`)
	})
	.on('error', function (err) {
		console.log(err);
	});

glob(svgDir+'/*.svg', (error, files)=>{
	if(error){
		console.log(error);
		return;
	}

	files.forEach( file => {
		const glyph = fs.createReadStream(file);
		const glyphName = path.basename(file, '.svg');
		const glyphUnicode = String.fromCharCode(getCodepoint(glyphName));
		glyph.metadata = {
			name: glyphName,
			unicode: [glyphUnicode],
		}
		// Trigger `data` event on font stream.
		fontStream.write(glyph);
	});
	// Trigger `end` event on font stream.
	fontStream.end();
});
