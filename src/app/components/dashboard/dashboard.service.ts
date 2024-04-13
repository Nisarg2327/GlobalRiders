import { Injectable } from '@angular/core';
    
@Injectable()
export class DashboardService {
    getProductsData() {
        return [
            {
                id: 1,
                name: 'Welcome',
                image: 'assets/images/Carousel1.jpg',
                message: "To a biking community, by bikers, for bikers.",
                message2: "Let's get up and running",
            },
            {
                id: 2,
                name: 'Plan',
                image: 'assets/images/Carousel2.png',
                message: "GlobalRiders cutting edge planning features ",
                message2: "have you covered",
            },
            {
                id: 3,
                name: 'Ride',
                image: 'assets/images/Carousel3.jpg',
                message: "Along with your buddies and track each",
                message2: "moment of your memorable trips ",
            },
            {
                id: 4,
                name: 'Share',
                image: 'assets/images/Carousel4.jpg',
                message: "Celebrating the biking community like never",
                message2: "before with GlobalRiders",
            },
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};