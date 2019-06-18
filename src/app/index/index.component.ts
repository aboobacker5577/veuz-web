import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {



  constructor() { 

  }

  ngOnInit() {
  }

  async ngAfterViewInit() {
	
	await this.loadScript('../assets/js/jquery-3.2.1.min.js');
	await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js');
	await this.loadScript('../assets/js/custlogo.js');
	await this.loadScript('../assets/js/mysidenav.js');
	await this.loadScript('../assets/js/carosel1.js');
    await this.loadScript('../assets/js/buttonhover.js');
	await this.loadScript('../assets/js/rotate.js');
	await this.loadScript('../assets/js/wow.min.js');
    await this.loadScript('../assets/js/wowcustom.js');
    await this.loadScript('../assets/js/bodyanimate.js');
    await this.loadScript('../assets/js/scroll1.js');
    await this.loadScript('../assets/js/refresh2.js');
	await this.loadScript('../assets/js/refresh.js');
	await this.loadScript('../assets/js/bootstrap.min.js');

	}
	private loadScript(scriptUrl: string) {
		return new Promise((resolve, reject) => {
		const scriptElement = document.createElement('script');
		scriptElement.src = scriptUrl;
		scriptElement.onload = resolve;
		document.body.appendChild(scriptElement);
		});
	}

 
}
