import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  data = [{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    },
    {
      name: 'M',
      inStock: true,
    },
    {
      name: 'S',
      inStock: false,
    }]
  }, {
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: false,
    },{
      name: 'L',
      inStock: false,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    },
    {
      name: 'M',
      inStock: true,
    },
    {
      name: 'S',
      inStock: false,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: true,
    }]
  },{
    name: 'Conjunto pijama tacto suave liso',
    img: 'https://static.oysho.net/6/photos2/2021/V/3/1/b/0209/965/893/BS/BS/0209965893_6_1_18.jpg?t=1605862719481&imwidth=1920',
    sizes: [{
      name: 'L',
      inStock: false,
    }]
  }];
  public newData: any[] = [];

  ngOnInit(): void {
    this.checkStock()
  }

  /**
   * Devuelve los productos que tienen stock, sin tallas duplicadas
   */
  public checkStock() {
    this.newData = this.data.filter(elem => {
      if (!elem.sizes.every((size: { inStock: boolean; }) => !size.inStock)) {

        elem.sizes = elem.sizes.filter((
          elemNew: { name: string, inStock: boolean },
          index: number,
          self: any[]
        ) => {
          const firstIndex = self.findIndex(item => item.name === elemNew.name && item.inStock === elemNew.inStock)
          return firstIndex === index
        })

        return elem
      }

      return null
    })

  }
}
