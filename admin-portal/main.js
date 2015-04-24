var products = {
  template: function() { //template is a property that points to an anonymous function
    return $("#products-template").html()
  },
  compile: function(){
    return Handlebars.compile(this.template());
  },
  request: function () {
    var getProducts = $.getJSON("http://localhost:3000/api/products.json"); //still an ajax request
    getProducts.done(this.buildTemplate);
  },
  buildTemplate: function(products_data) {
    var html = products.compile()(products_data);
    $('body').append(html);
  },
  init: function(){
    this.request();
  }
}

$(function(){
  products.init();
});


  // function productsRequest(){
  //
  //   var source   = $("#products-template").html();
  //   var template = Handlebars.compile(source);
  //
  //   $.ajax({
  //     url:"http://localhost:3000/api/products"
  //   }).done(function(data){
  //     console.log(data);
  //     var products = data;
  //     var html = template(products);
  //
  //     $('body').append(html);
  //
  //   });
  // }
  //
  //   function ordersRequest(){
  //     var source   = $("#orders-template").html();
  //     var template = Handlebars.compile(source);
  //
  //     $.ajax({
  //       url:"http://localhost:3000/api/orders"
  //     }).done(function(data){
  //       console.log(data);
  //       var orders = data;
  //       var html = template(orders);
  //
  //       $('body').append(html);
  //
  //       });
  //   }
  //
  //   function productRequest(product_id){
  //     // console.log(window.location.search);
  //
  //     var source   = $("#product-template").html();
  //     var template = Handlebars.compile(source);
  //
  //     $.ajax({
  //       url:"http://localhost:3000/api/products/"+product_id
  //     }).done(function(data){
  //       console.log(data);
  //       var product = data;
  //       var html = template(product);
  //
  //       $('body').append(html);
  //
  //       });
  //
  //   }
