#!/usr/bin/env node
const svgDir='build/svg-clean';
const srcDataFile='src/react/social-logo-data.jsx';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const xml2js = require( 'xml2js' );

/**
 * Transforms kebab case names to camel case
 * Legacy code with limited purpose.
 * @param name        ex: foo-bar-baz
 * @returns {String}  ex: fooBarBaz
 */
function kebabToCamelCase( name ) {
  var KEBAB_REGEX = /\-(\w)/g;
	return name.replace( KEBAB_REGEX, function replacer( match, capture ) {
		return capture.toUpperCase();
	} );
}

let socialLogoData = `/** This is a generated file. Do not edit. */
export const SocialLogoData = [`;

files = glob.sync(svgDir+'/*.svg');

files.forEach( file => {

	// Get logo name from SVG file
	const logoName = path.basename(file, '.svg');

	// Grab the relevant bits from the file contents
	var svgContent = fs.readFileSync(file);

	// Rename any attributes to camel case for react
	xml2js.parseString(
		svgContent,
		{
			async: false, // set callback is sync, since this task is sync
			trim: true,
			attrNameProcessors: [ kebabToCamelCase ]
		},
		function ( err, result ) {
			if ( ! err ) {
				var builder = new xml2js.Builder( {
					renderOpts: { pretty: false },
					headless: true //omit xml header
				} );
				svgContent = builder.buildObject( result );
			}
		}
	);

	socialLogoData += `
	{
		name: '${logoName}',
		svg: ${svgContent},
	},`;

} );
socialLogoData += `
]`;

fs.writeFileSync(srcDataFile, socialLogoData);
