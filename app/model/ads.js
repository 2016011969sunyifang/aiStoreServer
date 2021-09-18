'use strict';

module.exports = app => {
    const { BIGINT, STRING, INTEGER, DATE } = app.Sequelize;

    const Ads = app.model.define('store_ads', {
        name: STRING(50),
        image:STRING(8888),
        start_time:BIGINT,
        end_time:BIGINT,
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });

    return Ads;
};