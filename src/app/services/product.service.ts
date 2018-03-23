import { Injectable } from '@angular/core';


interface Product {
    id: number;
    img: string;
    text: string;
    title: string;

}

@Injectable()
export class ProductService {

  public products;
  public reviews;

  constructor() {

      this.products = [];


      this.products.push({id: 1, img: 'https://i1.rozetka.ua/goods/1894533/samsung_galaxy_s8_64gb_black_images_1894533427.jpg', text: 'Экран (5.8", Super AMOLED, 2960х1440)/ Samsung Exynos 8895 (4 x 2.3 ГГц + 4 x 1.7 ГГц)/ основная камера 12 Мп + фронтальная 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 7.0 (Nougat) / 3000 мА*ч\n' +
          'Подробнее: https://rozetka.com.ua/samsung_galaxy_s8_64gb_black/p15222497/', title: 'Samsung Galaxy S8 64GB Midnight Black'});

      this.products.push({id: 2, img: 'https://i2.rozetka.ua/goods/1758166/copy_lenovo_pa5e0028ua_57fce083e9842_images_1758166782.jpg', text: 'Экран (5.5", IPS, 1920x1080)/ Qualcomm Snapdragon 430 (1.4 ГГц)/ основная камера: 16 Мп, фронтальная камера: 8 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD/SDHC (до 128 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 6.0 (Marshmallow) / 4000 мА*ч', title: 'Lenovo K6 Note (K53a48) Grey'});
      this.products.push({id: 3, img: 'https://i1.rozetka.ua/goods/2063802/xiaomi_redmi_note4_332_blk_not_www_images_2063802790.jpg', text: 'Экран (5.5", IPS, 1920x1080)/ Qualcomm Snapdragon 625 (2 ГГц)/ основная камера: 13 Мп, фронтальная камера: 5 Мп/ RAM 3 ГБ/ 32 ГБ встроенной памяти + microSD/SDHC (до 128 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ поддержка 2х SIM-карт (Micro-SIM+Nano-SIM)/ Android 6.0 (Marshmallow) / 4100 мА*ч', title: 'Xiaomi Redmi Note 4 3/32GB Snapdragon Black (Международная версия)'});
  }


  getProduct(id: number) {
      return this.products.find(x => x.id === id);
  }

  getProducts() {
      return this.products.slice();
  }
}
