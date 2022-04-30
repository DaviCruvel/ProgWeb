const index = (req, res) =>{
    res.render("main/index", { layout: false });
}

const about = (req, res) => {
    res.render("main/about", { layout: false });
}

export default { index, about }