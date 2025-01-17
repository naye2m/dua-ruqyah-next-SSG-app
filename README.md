# Dua Ruqyah

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app).

**Getting Started**

First, run the development server:
``` bash
# First clone the git repo

git clone

cd to repo

# this repo also contains a postman Collection file for testing the API.

# run node package installations

npm install

# after installing

# run

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

# or build and run SSG pages by

npm build && npm start;
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.[http://localhost:3000](http://localhost:3000/) 

### [Live Preview At: https://dua-ruqyah.moontreee.com/](https://dua-ruqyah.moontreee.com/)


### **File Path Documentation**

#### **1.** `./404.js (link )` 
Test Live: [https://dua-ruqyah.moontreee.com/Not_valid](https://dua-ruqyah.moontreee.com/Not_valid)

* **Description**: Custom 404 error page for handling routes that do not exist.
* **Purpose**: Displays a user-friendly message when a user navigates to a non-existent page.
* **Notes**: Follow the Next.js conventions for custom 404 pages.

* * *

#### **2.** `GET /api/category/[lang].js` 
Test Live: [ Api: https://dua-ruqyah.moontreee.com/api/category/en](https://dua-ruqyah.moontreee.com/api/category/en)

* **Description**: API route to fetch categories based on the specified language.
* **Purpose**: Returns a list of categories in the requested language.
* **Parameters**:

* `lang`: Language code (e.g., `en`, `bn`).

* **Example Usage**:  
    `GET /api/category/en` 


* * * *

#### **3.** `GET /api/duas/[cat_id]/[lang].js`
Test Live: [ Api: https://dua-ruqyah.moontreee.com/api/duas/1/en](https://dua-ruqyah.moontreee.com/api/duas/1/en)
Test Live: [ Api: https://dua-ruqyah.moontreee.com/api/duas/1/bn](https://dua-ruqyah.moontreee.com/api/duas/1/bn)

* **Description**: API route to fetch a list of duas for a specific category and language.
* **Purpose**: Serves duas based on category ID and language.
* **Parameters**:

* `cat_id`: ID of the category.
* `lang`: Language code (e.g., `en`, `bn`).

* **Example Usage**:  
    `GET /api/duas/1/en`

* * *

#### **4.** `./_document.js`

* **Description**: Customizes the default Document component in Next.js.
* **Purpose**: Used for setting up the `<html>` and `<body>` tags and injecting global meta tags or styles.
* **Notes**: Ideal for adding custom fonts, styles, or metadata to the entire application.

* * *

#### **5.** `./api/sitemap.xml.jsx`
Test Live: [https://dua-ruqyah.moontreee.com/api/sitemap.xml](https://dua-ruqyah.moontreee.com/api/sitemap.xml)this will return the sitemap.xml file for dua-ruqyah.moontreee.com. try [localhost:3000/api/sitemap.xml](localhost:3000/api/sitemap.xml) that will return the sitemap.xml file for localhost:3000.

* **Description**: Generates a dynamic sitemap for the application.
* **Purpose**: Helps with search engine optimization by providing an XML sitemap of all routes.
* **Notes**: Typically consumed by search engines like Google for indexing.

* * *

#### **6.** `GET /api/subcategory/[cat_id]/[lang].js`
Test Live: [ Api: https://dua-ruqyah.moontreee.com/api/subcategory/1/en](https://dua-ruqyah.moontreee.com/api/subcategory/1/en)

* **Description**: API route to fetch subcategories for a given category ID and language.
* **Purpose**: Returns subcategories within a specific category.
* **Parameters**:

* `cat_id`: ID of the category.
* `lang`: Language code (e.g., `en`, `bn`).

* **Example Usage**:  
    `GET /api/subcategory/1/en`

* * *

#### **7.** `.``/duas/[cat_name].jsx`
Test Live: [https://dua-ruqyah.moontreee.com/duas/morning-duas](https://dua-ruqyah.moontreee.com/duas/morning-duas)

* **Description**: Dynamic route for rendering a list of duas based on the category name.
* **Purpose**: Displays all duas in a category.
* **Parameters**:

* `cat_name`: Name of the category.

* **Example URL**:  
    `/duas/morning-duas`

* * *

#### **8.** `./index.js`
Test Live: [https://dua-ruqyah.moontreee.com/](https://dua-ruqyah.moontreee.com/)

* **Description**: Entry point for the application.
* **Purpose**: Serves as the homepage, providing an overview or main navigation to the platform.
* **Notes**: This file follows the Next.js conventions for the root route.

* * *

#### **9.** `./_app.js`

* **Description**: Customizes the default App component in Next.js.
* **Purpose**: Used to wrap all pages, manage global states, or apply global styles.