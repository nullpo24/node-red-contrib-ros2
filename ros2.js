module.exports = function(RED) {
    var ROS2ServerNode = require('./ros2-server-node')(RED);
    var ROS2PublishNode = require('./ros2-publish-node')(RED);
    var ROS2SubscribeNode = require('./ros2-subscribe-node')(RED);
    
    RED.nodes.registerType("ros2-server",ROS2ServerNode);
    RED.nodes.registerType("ros2-publish",ROS2PublishNode);
    RED.nodes.registerType("ros2-subscribe",ROS2SubscribeNode);
}