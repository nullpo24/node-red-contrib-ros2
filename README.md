# node-red-contrib-ros2

## Installation

```
$ cd ~/.node-red
$ npm install ~/<path-to-dir>/node-red-contribode-red-contrib-ros2
```

## Demo
```
$ ros2 topic pub /chatter std_msgs/String "data: Hello World"
```
Set the topic to chatter, and then
You can subscribe to put subscriber-node.
