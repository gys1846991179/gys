let serJson=[
    {
        "img":"img/serves.png",
        "a":"每间客房都配有私人浴室",
        "b":"整个公共区域皆装饰大量的鲜花",
        "c":"点菜式用餐，提供宾客用餐选择",
        "d":"客房内使用更轻盈的布料以便更彻底地清洗",
        "e":"我们以信任、诚实、尊重、正直和承诺精神为准则",
        "f":"Best"
    },
    {
        "img":"img/adult-bread-breakfast-280121.jpg",
        "a":"每间客房都配有私人浴室",
        "b":"整个公共区域皆装饰大量的鲜花",
        "c":"点菜式用餐，提供宾客用餐选择",
        "d":"客房内使用更轻盈的布料以便更彻底地清洗",
        "e":"我们以信任、诚实、尊重、正直和承诺精神为准则",
        "f":"Best"
    },
    {
        "img":"img/adult-booking-brochure-1537003.jpg",
        "a":"每间客房都配有私人浴室",
        "b":"整个公共区域皆装饰大量的鲜花",
        "c":"点菜式用餐，提供宾客用餐选择",
        "d":"客房内使用更轻盈的布料以便更彻底地清洗",
        "e":"我们以信任、诚实、尊重、正直和承诺精神为准则",
        "f":"Best"
    },
    {
        "img":"img/alcoholic-beverage-bed-bedroom-1579253.jpg",
        "a":"每间客房都配有私人浴室",
        "b":"整个公共区域皆装饰大量的鲜花",
        "c":"点菜式用餐，提供宾客用餐选择",
        "d":"客房内使用更轻盈的布料以便更彻底地清洗",
        "e":"我们以信任、诚实、尊重、正直和承诺精神为准则",
        "f":"Best"
    },
    {
        "img":"img/adult-bathrobe-beautiful-1462543.jpg",
        "a":"每间客房都配有私人浴室",
        "b":"整个公共区域皆装饰大量的鲜花",
        "c":"点菜式用餐，提供宾客用餐选择",
        "d":"客房内使用更轻盈的布料以便更彻底地清洗",
        "e":"我们以信任、诚实、尊重、正直和承诺精神为准则",
        "f":"Best"
    }
]

function $(cl) {
        return document.getElementsByClassName(cl)[0];
}
serJson.forEach(function(intr){
    $("introducelr").innerHTML+=`<li>
                <img src="${intr.img}" alt="">
                <div>${intr.f}</div>
                <p>${intr.e}</p>
                <ul>
                    <li><em></em><span>${intr.a}</span></li>
                    <li><em></em><span>${intr.b}</span></li>
                    <li><em></em><span>${intr.c}</span></li>
                    <li><em></em><span>${intr.d}</span></li>
                </ul>
            </li>`
})
