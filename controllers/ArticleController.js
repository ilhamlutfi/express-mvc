const index = async (req, res) => {
    return res.render('article/index', {
        title: 'Articles'
    });
}

module.exports = ({ index });
