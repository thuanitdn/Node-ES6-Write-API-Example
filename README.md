

> **How to installing app ?**

Run console : npm install

Last step : npm start

> **How to write a api ?**

If you wanna to write api you need to understand about request life cycle

`Client request -> Server -> route -> request -> controller.
`

We can handle any event in controller.

First , you need to define url for each request in file `"app/http/routes.js"`

Second, you need to define a model if you implement to service relate to data.

For example :

Feecd model :

You can see a example in file :

```app\model\FeedModel.js```

 Third, you need to define a service

 You can see a example in file :

```app\services\FeedService.js```


Ok ! may be fine :)


