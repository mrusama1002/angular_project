import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    title='My new Application';
    result=[];
    services=[];
    service=null;
    categories=[];
    
  constructor() {

    this.categories=[
        {id:1, name:'Gelaatsverzorgingen'},
        {id:2, name:'Make-up'},
        {id:3, name:'Voeten, hand en nagels'},
        {id:4, name:'massages'},
        {id:5, name:'Ontharingen'},
        {id:6, name:'Semi-permanente make-up'},
    ];

    this.services=[ 
        {name:'PEDICURE - SPA EDITIE', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/pedicure.jpg'},
        {name:'GELLAK NAGELS - NIEUWE SET', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/nail.jpg'},
        {name:'MANICURE - CLASSIC', categories_id:1, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/manicure.jpg'},
        {name:'PEDICURE - SPA EDITIE 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/pedicure.jpg'},
        {name:'GELLAK NAGELS - NIEUWE SET 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/nail.jpg'},
        {name:'MANICURE - CLASSIC 2', categories_id:2, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/manicure.jpg'},
        {name:'PEDICURE - SPA EDITIE 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/pedicure.jpg'},
        {name:'GELLAK NAGELS - NIEUWE SET 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/nail.jpg'},
        {name:'MANICURE - CLASSIC 3', categories_id:3, description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s', image:'../../assets/images/manicure.jpg'},
    ]

   }

  ngOnInit() {
  }
  page(id){
      this.result=[];
      for (let service of this.services) {
          if (service.categories_id === id) {
              this.result.push(service);
          }
      }
  }

  moveBack(){
      this.result=[];
  }

  readMore(service){
       this.service = service;    
  }

  moveBackTo(){
      this.service = null;
  }

}
