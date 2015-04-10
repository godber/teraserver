var config = {};

/*
 Application environment.
 */

config.environment = 'development';

/*
 ***********************
 MongoDB Configuration
 ***********************
 */
config.mongodb = {}

config.mongodb.servers = "mongodb://localhost:27017/watchlist";

//config.mongodb.servers = "mongodb://172.17.0.9:27017/watchlist,mongodb://172.17.0.10:27017/watchlist,mongodb://172.17.0.11:27017/watchlist";

//config.mongodb.replicaSet = 'app';

//config.mongodb.replicaSetTimeout = 30000;

/*
 ***********************
 Elastic Search Configuration
 ***********************
 */
config.elasticsearch = {};

config.elasticsearch.ip = ["127.0.0.1:9200"];
config.elasticsearch.sniffOnStart = true;
config.elasticsearch.sniffInterval = 30000;
config.elasticsearch.sniffOnConnectionFault = true;
config.elasticsearch.requestTimeout = 120000;
config.elasticsearch.deadTimeout = 30000;
config.elasticsearch.maxRetries = 3;

/*
 ***********************
 StatsD Configuration
 ***********************
 */
config.statsd = {};

config.statsd.ip = '127.0.0.1';
config.statsd.mock = false;


/*
 ***********************
 API Service Configuration
 ***********************
 */
config.api = {};

config.api.workers = 1;

config.api.port = 8000;

config.api.ssl_path = '/app/config/ssl';

config.api.redis_ip = '127.0.0.1';

//config.api.plugins = ['agrinaut', 'agrilogs'];
// TODO: the ordering here is critical. Anything that defines 
// baucis routes needs to come at the end. The problem is that if you 
// have multiple plugins defining endpoints under the same namespace 
// baucis can end up shadowing other routes. 
config.api.plugins = ['agrinaut', 'veracity', 'agrilogs', 'ui' ];

// Location of service plugins
config.api.plugins_path = '/app/api/plugins';

// Location of static HTTP assets. 
config.api.static_assets = '/app/api/public';

config.api.log = '/app/logs/api.log';

module.exports = config;
