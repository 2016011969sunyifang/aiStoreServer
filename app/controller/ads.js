'use strict';
const Controller = require('./base');
const { Op } = require("sequelize");
class AdController extends Controller {
  async adsContent() {
    const { ctx } = this;
    console.log('++++++++++++++++++++');
    console.log(ctx.helper.getNow());
    const query = {
      where: {
          start_time: { [Op.lt]: ctx.helper.getNow() },
          end_time: { [Op.gt]: ctx.helper.getNow() },
      },
  };
  // console.log(ctx.model);
  this.success(await ctx.model.Ads.findAll(query));
  }
}

module.exports = AdController;
