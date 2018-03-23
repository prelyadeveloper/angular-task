import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService {


    reviews;
  constructor() {
      this.reviews = [];
      this.reviews.push({id: 1, name: 'Alex1', rate: 5, text: 'comment1', id_user: 1, id_entry: 1});
      this.reviews.push({id: 1, name: 'Alex2', rate: 7, text: 'comment2', id_user: 3, id_entry: 1});
      this.reviews.push({id: 1, name: 'Alex3', rate: 5, text: 'comment3', id_user: 1, id_entry: 2});
      this.reviews.push({id: 1, name: 'Alex4', rate: 7, text: 'comment4', id_user: 3, id_entry: 2});
  }

s
    getReviews(id: number) {

    return this.reviews.filter( x => x.id_entry === id);
  }





}
