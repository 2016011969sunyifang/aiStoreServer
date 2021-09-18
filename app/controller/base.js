const Controller = require('egg').Controller;
const { Op } = require("sequelize");

class BaseController extends Controller {
    get user() {
        return this.ctx.locals.userInfo;
    }
    success(data) {
        this.ctx.body = {
            code: 200,
            message: "ok",
            data,
        }
    }
    fail(err, data) {
        this.ctx.body = {
            code: err.code,
            message: err.msg,
            data,
        }
    }
    async getUserInfo(query = { where: { id: this.user.id } }) {
        return await this.ctx.model.User.findOne(query)
    }
    async isVip() {
        const now = this.ctx.helper.getNow()
        return await this.getUserInfo({ where: { id: this.user.id, is_vip: 1, vip_start: { [Op.lt]: now }, vip_end: { [Op.gt]: now } } }) ? true : false;
    }
}
module.exports = BaseController;