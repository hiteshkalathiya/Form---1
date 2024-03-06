let blogs = [];

const ui = () => {
    document.getElementById("data").innerHTML = "";
    for (let i = 0; i < blogs.length; i++) {
        let img = document.createElement("img");
        img.src = blogs[i].url;
        let title = document.createElement("p");
        title.textContent = blogs[i].title;
        let div = document.createElement("div");
        div.classList.add("blog-listing");


        let pCategory = document.createElement("p");
        pCategory.textContent = blogs[i].category;
        let pContent = document.createElement("p");
        pContent.textContent = blogs[i].content;
        let pName = document.createElement("p");
        pName.textContent = blogs[i].name;

        let likeButton = document.createElement("button");
        likeButton.textContent = "like";
        likeButton.addEventListener("click", () => toggleLike(i));

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => removeProduct(i));


        div.append(img, title, pCategory, pContent, pName, likeButton, deleteButton);
        document.getElementById("data").append(div);
    }
};

const toggleLike = (index) => {
    blogs[index].liked = !blogs[index].liked;
    ui();
    if (blogs[index].liked) {
        alert("You liked ");
    }
};

const removeProduct = (index) => {
    blogs.splice(index, 1);
    ui();

}

const header = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let url = document.getElementById("url").value;
    let category = document.getElementById("category").value;
    let content = document.getElementById("content").value;
    let name = document.getElementById("name").value;

    let blog = {
        title: title,
        url: url,
        category: category,
        content: content,
        name: name,
        liked: false,
    };
    blogs.push(blog);
    ui();
    console.log(blogs);
};

document.getElementById("form").addEventListener("submit", header);
