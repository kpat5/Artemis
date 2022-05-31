let products;
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    try {
      products = JSON.parse(data);
    } catch (e) {
      products = data;
    }
    class showProducts {
      constructor(product) {
        this.product = product;
      }

      addProducts(category, index) {
        let div = document.createElement("div");
        div.classList.add("onePro");
        let img = document.createElement("img");
        img.src = this.product[index].Image;
        let div2 = document.createElement("div");
        div2.classList.add("oneProText");
        div2.innerHTML = `${this.product[index].Title}<br/>${this.product[index].Price}`;
        div.appendChild(img);
        div.appendChild(div2);
        let cat = document.querySelector(`.${category}`);
        cat.appendChild(div);
      }
    }
    obj = new showProducts(products);
    for (let each in products) {
      obj.addProducts(`${products[each].Category}`, each);
    }
  });
