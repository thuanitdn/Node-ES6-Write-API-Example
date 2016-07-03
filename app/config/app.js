/**
 * Created by thuan on 5/7/2016.
 */
import util from 'util';
import dev from './env/development';
import prod from './env/production';
import test from './env/test';

const extend=util._extend;

module.exports={
    development:extend(dev),
    production:extend(prod),
    test:extend(test)
}[process.env.NODE_ENV || 'development'];