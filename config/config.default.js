/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};
    //数据库连接配置
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        timezone: '+08:00',
        // dialectOptions: {
        //     charset: 'utf8mb4',
        //     dateStrings: true,
        //     typeCast(field, next) {
        //         if (field.table == "t_news" && field.name == "create_at") {
        //             return new Date(field.string()).getTime();
        //         }
        //         // if (field.table == "t_wxuser" && field.name == "vip_start") {
        //         //     return new Date(field.string()).getTime();
        //         // }
        //         // if (field.table == "t_wxuser" && field.name == "vip_end") {
        //         //     return new Date(field.string()).getTime();
        //         // }
        //         if (field.table == "t_resell_order" && field.name == "create_time") {
        //             return new Date(field.string()).getTime();
        //         }
        //         if (field.table == "t_access_token" && field.name == "create_time") {
        //             return new Date(field.string()).getTime();
        //         }
        //         if (field.table == "t_integral_info" && field.name == "create_time") {
        //             return new Date(field.string()).getTime();
        //         }
        //         if (field.table == "t_product_type" && field.name == "start_time") {
        //             return new Date(field.string()).getTime();
        //         }
        //         if (field.table == "t_product_type" && field.name == "end_time") {
        //             return new Date(field.string()).getTime();
        //         }

        //         return next();
        //     }
        // },
        database: 'aiStore',
        host: '106.14.196.158',
        port: '3306',
        username: 'root',
        password: '04bf828a99fbb4d8',
        timezone: '+08:00',
    };
    //跨域配置
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*'],
    };

    config.cors = {
        // origin: ['http://192.168.2.3:8888'],
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    //jwt验证
    config.jwt = {
        secret: "123456",
        // enable: true,
        expiresIn: '24h'
    };
    //不需要验证token的路由
    config.whileTokenList = ['/', '/test/time']

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1631788793844_5929';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};