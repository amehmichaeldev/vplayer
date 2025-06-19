function addtocart(productid,product_t){
  
    $.ajax({
        type: "GET",
        url: "/sd3.php?show=add_shopping_cart",
        data: "productid=" + productid + "&product_t=" + product_t,
        success: function(data){
                  // alert( "Data Saved: " + data );
                if(data ==0){
Swal.fire({
        title: 'Success',
        text: "The item has been added into your shopping cart",
        type: 'succes',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Check Out',
        cancelButtonText: "Continue Shopping"
      }).then((result) => {
        if (result.value) {
          window.location.replace("https://romemajor.com/sd3.php?show=show_shopping_cart");
}else{
  
}
    });
                }
                else{
                alert("something is wrong, please try again");
                }
                }
   });
}