class SessionController {
  async inicial(req, res) {
    res.render("../views/index");
  }
}

export default new SessionController();
