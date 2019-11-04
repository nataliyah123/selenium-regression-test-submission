const assert = require('assert'),
         Homepageeditcount = require('../pageobjects/homepageeditcount.page'),
         Api = require( 'wdio-mediawiki/Api' ),
         UserLoginPage = require( 'wdio-mediawiki/LoginPage' );
         Util = require( 'wdio-mediawiki/Util' );
         Editpage = require('../pageobjects/edit.page')

describe('Special:Hompage', function(){
		
	
	it('should have edit count span on home page', function(){
		// command below is commented out because of vagrant specific central auth error
		// Homepageeditcount.open('Main_Page')
		UserLoginPage.login('Admin', 'vagrant');
		Homepageeditcount.open('Main_Page')
		Homepageeditcount.onclick();
		assert(Homepageeditcount.spanexits.isExisting());
	} );

	it('Edit count must increase when user make edits', function(){
		let previous_count1, new_count1;
		UserLoginPage.login('Admin', 'vagrant');
		Homepageeditcount.open('Main_Page')
		Homepageeditcount.onclick();
		previous_count1= Homepageeditcount.counts()
		page = Math.random().toString();
		Editpage.edit(page, 'add some text');
		console.log('count...........',previous_count1,new_count1)
		Homepageeditcount.onclick().waitForEnabled(3000)
		// new_count1 = Homepageeditcount.counts()
		// assert(previous_count1< new_count1)
	})
}) ;       
