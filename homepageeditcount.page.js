const Page = require('../wdio-mediawiki/Page.js')
const Homepage = require('../../../extensions/GrowthExperiments/tests/selenium/pageobjects/homepage.page')

class EditCount extends Page{	
	
	get spanexits(){return $('.growthexperiments-homepage-module-editcount')};
	get homepagehref(){ const homehref = $('*=Homepage'); return homehref };
	get usernamelink(){ const userlink = $('#pt-userpage a');  return userlink}
	
	open(Page){
		
		super.openTitle(Page);
	}

	onclick(){

		this.usernamelink().ready()
		if(this.spanexits.error)
		{
			this.homepagehref.click()
			// console.log("this is counts", this.spanexits.getText())
		}		
	}

	counts(){

		let x = this.spanexits.getText()
		x = x.split(' ')
		return parseInt(x[0])
		
	}



	
}

module.exports = new EditCount();
