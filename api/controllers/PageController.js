const pageContent = require('../../config/pageContent.json');

module.exports = {
    body: async function (req, res) {
        try {
            return res.view('pages/body', {
                personalInfo: pageContent.personalInfo,
                profession: pageContent.profession,
                about: pageContent.about
            })
        } catch (err) {
            return res.serverError(err)
        }
    }
}