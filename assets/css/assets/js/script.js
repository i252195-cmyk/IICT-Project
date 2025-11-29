function showAlert(msg){
  window.alert(msg);
  console.log("ALERT_SHOWN:", msg);
}

function initHome(){
  const loginBtn = document.getElementById('loginBtn');
  if(loginBtn){
    loginBtn.addEventListener('click', function(){
      const email = document.getElementById('email').value.trim();
      const pwd = document.getElementById('password').value.trim();
      if(!email || !pwd){
        showAlert("Please enter email and password.");
        return;
      }
      showAlert("Login successful — Redirecting to Home.");
      window.location.href = "home.html";
    });
  }
}

function initCourseDetails(){
  const addBtn = document.getElementById('addToCart');
  if(addBtn){
    addBtn.addEventListener('click', function(){
      showAlert("Course added to cart!");
      window.location.href = "cart.html";
    });
  }
}

function initCart(){
  const rems = document.querySelectorAll('.btn-remove');
  rems.forEach(b=>{
    b.addEventListener('click', function(){
      const name = this.dataset.name || "Item";
      showAlert(name + " removed from cart.");
      this.closest('.cart-item').remove();
    });
  });
}

function initContact(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      if(!name){
        showAlert("Please enter your name.");
        return;
      }
      showAlert("Thanks! Your message has been sent.");
      form.reset();
    });
  }

  const params = new URLSearchParams(window.location.search);
  if(params.get("order") === "confirmed"){
    const status = document.getElementById("orderStatus");
    if(status){
      status.style.display = "block";
      showAlert("Order Confirmed!");
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  initHome();
  initCourseDetails();
  initCart();
  initContact();
});
