# Volvo Cars (Global Online Digital)

## Submitters comments

## General

I was initially planing on using the VCC-UI library as it is marked as giving bonus points in the project. I did however notice that most of it has been deprecated. I followed the links to the new volvo-css documentation and started with that, but midway through building the Project the documentation started giving med permission denied errors. As I was prompted in the mail to not spend more than 4 hours on the project I decided to not spend more time on this and instead use my own css as I was also asked not to use any third party libraries. Both VCC-UI and volvo-css are still in the project dependencies, but not used.

Tha plan was to build another version using volvo-css when I got access to it again, but I did not have time to do that within the 4 hour limit. I have not used regular ccs-modules in quite some time and am more used to using styled-components, tailwind or other similiar libraries. I did however not want to use any third party libraries so I went with css-modules and it was a fun training experience.

I put most of my focus on simply getting the 2 main parts working as smoothly as I could so there might be some small things that are not perfect. I did not have time do do any extensive testing and the actual page is quite empty. I did however try to make it as responsive as I could within the time limit.

I also tried to make the data fetching as real as possible. I used getStaticProps, it could have been getServerSideProps if i guessed the page would be a bit more dynamic. I assumed that in reality, this data is coming from some sort of CMS. I planed on using an API route initially, but it felt a bit too redundant and it does not really work well with getStaticProps.

## Used technologies

I have used the following technologies:

- React
- Next.js
- Typescript
- Css modules

## Project structure

I have used the following project structure:

- components
  - Carousel - The carousel component, it is generalized and should be able to be used for any carousel
  - CarouselCar - The carousel car component, it is used to render the cars in the carousel. This is very specific to the cars.
  - BodyFilter - The body filter component, it is used to filter the cars by body type.

For simplicity in this case I have put all the components in the same folder, and created a css-module for each component and collocated that with the component using the same name.

- pages
  - \_app - The app page
  - index - The main page, it is used to render the carousel and the body filter.
  - 404 - The 404 page, i created a super simple 404 page so you can navigate back to the main page if you click the links in the carousel.

I used the public folder for the global css and the little css i wanted on the index page. I would have put it all neatly into css folders if I had more css to write.

## How to run the project

Run `yarn` or `yarn install` to install all dependencies

Run `yarn dev` to start the project in development mode or
Run `yarn build` to build the project and then `yarn start` to start the project in production mode

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`

## Submission

Clone this repository to get started. Due to a number of reasons, not least privacy, you will be asked to zip your solution and mail it in, instead of submitting a pull-request. In order to maintain an unbiased reviewing process, please ensure to keep your name or other Personal Identifiable Information (PII) from the code.
