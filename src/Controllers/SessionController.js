class SessionController {
  async inicial(req, res) {
    res.render("../view/index");
  }
}

export default new SessionController();
