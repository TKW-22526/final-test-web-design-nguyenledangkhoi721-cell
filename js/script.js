// ==========================================
// 1. DANH SÁCH DỮ LIỆU SẢN PHẨM KAWASAKI MOTORS
// ==========================================
const productlist = [
  // --- PHÂN KHÚC SIÊU MÔ TÔ CAO CẤP (ID: 1 -> 8) ---
  {
    id: 1,
    name: "Kawasaki Ninja H2R",
    price: "520.000.000 VNĐ",
    oldPrice: "520.000.000 VNĐ",
    image: "../assets/images/h2r.jpg",
    productLink: "chi-tiet.html",
    cat: "superbike", system: "kawasaki",
    desc: "Kawasaki Ninja H2R là siêu mô tô mạnh nhất thế giới dành riêng cho đường đua, không được phép lưu thông trên đường phố công cộng do thiếu các trang bị an toàn cơ bản. Xe được trang bị khối động cơ siêu nạp (Supercharged) 998cc, sản sinh công suất khủng khiếp lên tới 310 - 326 mã lực, cho phép đạt tốc độ tối đa vượt ngưỡng 400km/h."
  },
  {
    id: 2,
    name: "Xe Kawasaki Z1000",
    price: "515.000.000 VNĐ",
    oldPrice: "515.000.000 VNĐ",
    image: "../assets/images/Kawasaki.jpg",
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "kawasaki",
    desc: "Kawasaki Z1000 là một trong những xe moto đẹp được đánh giá cao tại thị trường Việt với phiên bản tiêu chuẩn và R Edition. Trong đó, xe sở hữu động cơ 4 máy siêu bền với tiếng hú phấn khích, hệ thống phanh công nghệ ABS, phanh đĩa đôi với thiết kế xe thể thao phong cách hầm hố."
  },
  {
    id: 3,
    name: "Kawasaki Vulcan 900 Custom",
    price: "320.000.000 VNĐ",
    oldPrice: "320.500.000 VNĐ",
    image: "../assets/images/vulcan.jpg",
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "ducati",
    desc: "kawasaki Vulcan 900 Custom mang đến phong cách bụi bặm, phá cách cực chất của nhà Kawasaki với kiểu dáng Cruiser cơ bắp Mỹ. Xe sở hữu động cơ V-Twin mạnh mẽ, tư thế ngồi thoải mái, cực kỳ phù hợp cho những ai đam mê những cung đường dài và sự táo bạo."
  },
  {
    id: 4,
    name: "Kawasaki Ninja ZX-10R",
    price: "729.000.000 VNĐ",
    oldPrice: "750.000.000 VNĐ",
    image: "../assets/images/zx10r.jpg", 
    productLink: "chi-tiet.html",
    cat: "superbike", system: "kawasaki",
    desc: "Kawasaki Ninja ZX-10R là dòng Sportbike thần thánh bước ra từ giải đua thế giới WSBK, sở hữu hàng loạt công nghệ điện tử tối tân cùng khối động cơ 998cc cho sức mạnh gần 200 mã lực."
  },
  {
    id: 5,
    name: "Kawasaki Z900 ABS",
    price: "320.000.000 VNĐ",
    oldPrice: "340.000.000 VNĐ",
    image: "../assets/images/z900.jpg", 
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "kawasaki",
    desc: "Kawasaki Z900 ABS kế thừa ngôn ngữ thiết kế Sugomi dữ dằn, sở hữu động cơ 4 xi-lanh tinh chỉnh mượt mà, là lựa chọn phân khối lớn tầm trung hoàn hảo để di chuyển hàng ngày."
  },
  {
    id: 6,
    name: "Kawasaki Ninja 400",
    price: "169.000.000 VNĐ",
    oldPrice: "175.000.000 VNĐ",
    image: "../assets/images/ninja400.jpg", 
    productLink: "chi-tiet.html",
    cat: "superbike", system: "kawasaki",
    desc: "Kawasaki Ninja 400 là mẫu sportbike quốc dân lý tưởng dành cho người mới chơi xe phân khối lớn, kiểu dáng thể thao sắc sảo, động cơ 2 xi-lanh tiết kiệm nhiên liệu và tư thế ngồi thoải mái."
  },
  {
    id: 7,
    name: "Kawasaki Vulcan S 650",
    price: "249.000.000 VNĐ",
    oldPrice: "260.000.000 VNĐ",
    image: "../assets/images/vulcan650.jpg", 
    productLink: "chi-tiet.html",
    cat: "cruiser", system: "kawasaki",
    desc: "Kawasaki Vulcan S 650 là dòng xe Cruiser hiện đại độc đáo, kết hợp giữa phong cách cổ điển cuốn hút và khối động cơ xi-lanh đôi thể thao mạnh mẽ đầy phá cách."
  },
  {
    id: 8,
    name: "Kawasaki Versys-X 300",
    price: "145.000.000 VNĐ",
    oldPrice: "153.000.000 VNĐ",
    image: "../assets/images/versys300.jpg", 
    productLink: "chi-tiet.html",
    cat: "adventure", system: "kawasaki",
    desc: "Kawasaki Versys-X 300 là mẫu xe turing, phượt địa hình (Adventure) cỡ nhỏ tiện lợi, bền bỉ, sẵn sàng cùng bạn chinh phục mọi cung đường gồ ghề hiểm trở."
  },

  // --- PHÂN KHÚC XE TẦM TRUNG & ĐÔ THỊ (ID: 9 -> 18) ---
  {
    id: 9,
    name: "Kawasaki J300 Special Edition",
    price: "60.000.000 VNĐ",
    oldPrice: "60.000.000 VNĐ",
    image: "../assets/images/j300.jpg", 
    productLink: "chi-tiet.html",
    cat: "scooter", system: "kawasaki",
    desc: "Kawasaki J300 mang đến trải nghiệm xe tay ga đô thị (Maxi-Scooter) phong cách thể thao mạnh mẽ đặc trưng của nhà Kawasaki. Xe được trang bị động cơ 299cc mượt mà, cốp xe siêu rộng và kính chắn gió cao, là sự lựa chọn hoàn hảo cho việc di chuyển hằng ngày lẫn đi tour xa."
  },
  {
    id: 10,
    name: "Kawasaki W175 SE",
    price: "69.000.000 VNĐ",
    oldPrice: "75.000.000 VNĐ",
    image: "../assets/images/w175.webp", 
    productLink: "chi-tiet.html",
    cat: "classic", system: "kawasaki",
    desc: "Kawasaki W175 SE mang phong cách hoài cổ Classic thuần túy, động cơ xylanh đơn giản dị, bền bỉ, cực kỳ thích hợp cho những ai đam mê độ xe phong cách Cafe Racer hay Tracker."
  },
  {
    id: 11,
    name: "Kawasaki KLX230R",
    price: "145.000.000 VNĐ",
    oldPrice: "155.000.000 VNĐ",
    image: "../assets/images/klx230.png", 
    productLink: "chi-tiet.html",
    cat: "offroad", system: "kawasaki",
    desc: "Kawasaki KLX230R là mẫu cào cào chuyên dụng địa hình trọng lượng siêu nhẹ, phuộc nhún hành trình dài vượt trội giúp dễ dàng bay nhảy trên các cung đường bùn đất."
  },
  {
    id: 12,
    name: "Kawasaki Z400 ABS",
    price: "149.000.000 VNĐ",
    oldPrice: "159.000.000 VNĐ",
    image: "../assets/images/z400.jpg", 
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "kawasaki",
    desc: "Kawasaki Z400 là biến thể Naked-bike của Ninja 400, đem lại tư thế ngồi thẳng lưng, góc lái linh hoạt dễ luồn lách trong đô thị đông đúc."
  },
  {
    id: 13,
    name: "Kawasaki Ninja 650 ABS",
    price: "200.000.000 VNĐ",
    oldPrice: "210.000.000 VNĐ",
    image: "../assets/images/ninja650.jpg", 
    productLink: "chi-tiet.html",
    cat: "superbike", system: "kawasaki",
    desc: "Kawasaki Ninja 650 sở hữu kiểu dáng Sport-city vô cùng thể thao nhưng không quá mỏi lưng, động cơ 2 xi-lanh cho mô-men xoắn mạnh mẽ ngay ở vòng tua thấp."
  },
  {
    id: 14,
    name: "Kawasaki Z650 ABS",
    price: "190.000.000 VNĐ",
    oldPrice: "197.000.000 VNĐ",
    image: "../assets/images/z650.webp", 
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "kawasaki",
    desc: "Kawasaki Z650 là mẫu xe Naked-bike gọn gàng, sở hữu bộ khung gầm trọng lượng nhẹ cùng khối động cơ 649cc đầy linh hoạt cho trải nghiệm phấn khích phố thị."
  },
  {
    id: 15,
    name: "Kawasaki Ninja ZX-25R",
    price: "198.000.000 VNĐ",
    oldPrice: "205.000.000 VNĐ",
    image: "../assets/images/zx25r.jpg", 
    productLink: "chi-tiet.html",
    cat: "superbike", system: "kawasaki",
    desc: "Cỗ máy gầm rú điên cuồng độc nhất phân khúc 250cc với cấu hình động cơ 4 xi-lanh thẳng hàng, cho tiếng hú rít uy lực như các dòng xe nghìn phân khối tại vòng tua lên đến 17.000 vòng/phút."
  },
  {
    id: 16,
    name: "Kawasaki Z H2 (Supercharged)",
    price: "700.000.000 VNĐ",
    oldPrice: "730.000.000 VNĐ",
    image: "../assets/images/zh2.jpg", 
    productLink: "chi-tiet.html",
    cat: "nakedbike", system: "kawasaki",
    desc: "Quái thú Hyper-naked đứng đầu dòng Z-Series của nhà Kawasaki. Được tích hợp cỗ máy siêu nạp độc quyền mang lại gia tốc xé gió đầy điên rồ thách thức mọi giới hạn tốc độ."
  },
  {
    id: 17,
    name: "Kawasaki Meguro K3",
    price: "450.000.000 VNĐ",
    oldPrice: "465.000.000 VNĐ",
    image: "../assets/images/megurok3.jpg", 
    productLink: "chi-tiet.html",
    cat: "classic", system: "kawasaki",
    desc: "Tuyệt tác di sản mang đậm tính lịch sử của thương hiệu lâu đời Meguro nay được phục dựng hoàn hảo bởi Kawasaki. Từng đường nét mạ chrome tinh xảo thủ công đầy tính nghệ thuật quý tộc."
  },
  {
    id: 18,
    name: "Kawasaki Versys 1000 SE",
    price: "499.000.000 VNĐ",
    oldPrice: "520.000.000 VNĐ",
    image: "../assets/images/versys1000.jpg", 
    productLink: "chi-tiet.html",
    cat: "adventure", system: "kawasaki",
    desc: "Vua đường trường Adventure cao cấp nhất trang bị hệ thống phuộc điện tử thông minh tự động thích ứng địa hình KECS, kính chắn gió lớn tiện nghi vượt trội cho những chuyến đi xuyên lục địa."
  }
];

// ==========================================
// 2. HÀM SINH SẢN PHẨM (DOM THUẦN - CẬP NHẬT 2 NÚT)
// ==========================================
function addproduct(id, name, price, image, hyperlink) {
    // Khung cột lớn bao quanh phần tử
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col");

    // Khung ảnh vuông bo tròn chống tràn
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden border rounded shadow-sm bg-white");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid object-fit-contain h-100 p-2"); 

    productImage.appendChild(img);

    // Khung thông tin sản phẩm bên dưới ảnh
    const productInfor = document.createElement("div");
    productInfor.setAttribute("class", "product-infor mt-2 text-center");

    // Tên sản phẩm chữ in đậm và tự cắt ngắn khi quá dài
    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1 text-truncate px-1 small");
    productName.textContent = name;

    // Giá màu đỏ nổi bật
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-semibold mb-2 small");
    productPrice.textContent = price;

    // KHUNG CHỨA HAI NÚT ĐIỀU HƯỚNG CẠNH NHAU (Flexbox)
    const btnGroup = document.createElement("div");
    btnGroup.setAttribute("class", "d-flex gap-1 px-1");

    // Nút 1: Xem chi tiết
    const productLink = document.createElement("a");
    productLink.textContent = "Chi tiết";
    productLink.setAttribute("href", hyperlink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm flex-grow-1 fw-medium text-white px-1");
    productLink.style.fontSize = "12px";

    // Nút 2: Thêm nhanh vào giỏ hàng (Icon 🛒+)
    const addCartBtn = document.createElement("button");
    addCartBtn.innerHTML = '<i class="bi bi-cart-plus-fill"></i>';
    addCartBtn.setAttribute("class", "btn btn-danger btn-sm px-2");
    addCartBtn.setAttribute("title", "Thêm nhanh vào giỏ");
    addCartBtn.setAttribute("onclick", `addToCart(${id})`);

    // Gắn hai nút vào hàng ngang chung
    btnGroup.appendChild(productLink);
    btnGroup.appendChild(addCartBtn);

    // Xếp các tầng vào khối thông tin sản phẩm
    productInfor.appendChild(productName);
    productInfor.appendChild(productPrice);
    productInfor.appendChild(btnGroup);

    // Kết hợp cấu trúc ảnh + thông tin thành một thực thể hoàn thiện
    productItem.appendChild(productImage);
    productItem.appendChild(productInfor);

    // Đẩy thực thể vừa dựng xong lên giao diện chính
    const listContainer = document.getElementById("product-list");
    if (listContainer) {
        listContainer.appendChild(productItem);
    }
}

// ==========================================
// 3. HÀM LOGIC QUẢN LÝ ĐỒNG BỘ GIỎ HÀNG LOCALSTORAGE
// ==========================================

// Hàm A: Quét mảng dữ liệu tính toán tổng số lượng đẩy lên Badge Header
function updateCartBadge() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("lumix_cart")) || [];
    } catch (e) {
        cart = [];
    }
    
    let totalQty = 0;
    cart.forEach(function(item) {
        let qty = parseInt(item.quantity, 10);
        totalQty += isNaN(qty) ? 1 : qty; // Ép kiểu số chặt chẽ để triệt tiêu hoàn toàn lỗi NaN
    });
    
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.textContent = totalQty;
    }
}

// Hàm B: Lưu trữ hoặc nâng số lượng sản phẩm khi người mua nhấn chọn
function addToCart(productId) {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("lumix_cart")) || [];
    } catch (e) {
        cart = [];
    }

    let found = false;

    // Tìm kiếm sản phẩm trùng khớp id trong kho lưu trữ cục bộ
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            let currentQty = parseInt(cart[i].quantity, 10);
            cart[i].quantity = (isNaN(currentQty) ? 1 : currentQty) + 1;
            found = true;
            break;
        }
    }

    // Nếu mua lần đầu, trích xuất dữ liệu thô từ danh sách productlist nạp vào
    if (!found) {
        let productData = productlist.find(function(p) {
            return p.id === productId;
        });
        if (productData) {
            cart.push({
                id: productData.id,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                quantity: 1
            });
        }
    }

    localStorage.setItem("lumix_cart", JSON.stringify(cart));
    updateCartBadge();
    alert("Đã thêm sản phẩm vào giỏ hàng thành công! 🎉");
}

// Hàm C: Đọc chuỗi truy vấn để cập nhật nội dung cho trang chi tiết (?id=...)
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);

    if (isNaN(productId)) return;

    const currentProduct = productlist.find(function(item) {
        return item.id === productId;
    });

    if (currentProduct) {
        const detailName = document.getElementById("detail-name");
        if (detailName) detailName.textContent = currentProduct.name;

        const detailImg = document.getElementById("detail-img");
        if (detailImg) {
            detailImg.setAttribute("src", currentProduct.image);
            detailImg.setAttribute("alt", currentProduct.name);
        }

        const detailPrice = document.getElementById("detail-price");
        if (detailPrice) detailPrice.textContent = currentProduct.price;

        const detailOldPrice = document.getElementById("detail-old-price");
        if (detailOldPrice && currentProduct.oldPrice) {
            detailOldPrice.textContent = currentProduct.oldPrice;
        }

        const detailDesc = document.getElementById("detail-desc");
        if (detailDesc) detailDesc.textContent = currentProduct.desc;
        
        const addToCartBtn = document.getElementById("add-to-cart-btn");
        if (addToCartBtn) {
            addToCartBtn.setAttribute("onclick", `addToCart(${currentProduct.id})`);
        }
    }
}// Hàm hiển thị danh sách sản phẩm trong trang giỏ hàng
function renderCart() {
    // Đọc dữ liệu từ localStorage
    let cart = JSON.parse(localStorage.getItem('lumix_cart')) || [];
    
    let tableBody = document.getElementById('cart-table-body');
    let emptyMsg = document.getElementById('empty-cart-msg');
    let totalQtySpan = document.getElementById('total-quantity');
    let totalPriceSpan = document.getElementById('total-price');
    
    // Nếu không có phần tử nào trong giao diện giỏ hàng thì dừng lại để tránh lỗi
    if (!tableBody) return;

    // Trường hợp giỏ hàng trống
    if (cart.length === 0) {
        tableBody.innerHTML = '';
        emptyMsg.classList.remove('d-none');
        totalQtySpan.innerText = '0 xe';
        totalPriceSpan.innerText = '0 VNĐ';
        return;
    }

    // Nếu có sản phẩm
    emptyMsg.classList.add('d-none');
    let htmlContent = '';
    let totalQuantity = 0;
    let totalPriceSum = 0;

    cart.forEach(item => {
        // Chuẩn hóa giá tiền từ chuỗi "1.000.000.000 VNĐ" thành số để tính toán
        let cleanPrice = parseInt(item.price.replace(/[.\sVNĐ]/g, '')) || 0;
        let itemSubtotal = cleanPrice * item.quantity;
        
        totalQuantity += item.quantity;
        totalPriceSum += itemSubtotal;

        htmlContent += `
            <tr class="border-bottom border-light">
                <td>
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded border p-1 bg-light" style="width: 60px; height: 60px; object-fit: contain;">
                        <div>
                            <h6 class="fw-bold mb-0 text-dark">${item.name}</h6>
                            <small class="text-muted">Phân khúc: ${item.cat ? item.cat.toUpperCase() : 'KAWASAKI'}</small>
                        </div>
                    </div>
                </td>
                <td class="text-center fw-medium text-secondary">${item.price}</td>
                <td class="text-center">
                    <div class="input-group input-group-sm mx-auto" style="width: 100px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${item.id}, -1)">-</button>
                        <input type="text" class="form-control text-center bg-white border-secondary-subtle" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td class="text-end">
                    <button class="btn btn-link text-danger p-0" onclick="removeCartItem(${item.id})">
                        <i class="bi bi-trash3-fill fs-5"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    tableBody.innerHTML = htmlContent;
    totalQtySpan.innerText = `${totalQuantity} xe`;
    totalPriceSpan.innerText = totalPriceSum.toLocaleString('vi-VN') + ' VNĐ';
}

// Hàm thay đổi số lượng sản phẩm (+ hoặc -)
function changeQty(id, delta) {
    let cart = JSON.parse(localStorage.getItem('lumix_cart')) || [];
    let product = cart.find(item => item.id == id);
    
    if (product) {
        product.quantity += delta;
        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id != id); // Xóa sản phẩm nếu giảm xuống 0
        }
    }
    
    localStorage.setItem('lumix_cart', JSON.stringify(cart));
    renderCart();         // Vẽ lại giao diện giỏ hàng
    updateCartBadge();    // Cập nhật số đếm trên Header
}

// Hàm xóa hẳn một sản phẩm khỏi giỏ hàng
function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem('lumix_cart')) || [];
    cart = cart.filter(item => item.id != id);
    
    localStorage.setItem('lumix_cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

// Hàm cập nhật Badge số lượng giỏ hàng trên thanh Header (Dùng chung cho tất cả các trang)
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('lumix_cart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    let badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = totalCount;
    }
}

// Lắng nghe cấu trúc cây DOM sẵn sàng để khởi chạy toàn cục ổn định
document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
    renderProductDetail();
});