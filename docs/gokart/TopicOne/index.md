---
title: Topic One
description: ART Architecture
sidebar_position: 1
---
use NoMachine to connect to the jetson 

connect to RoboCars wifi
password: UCSDrobocars2018

select ucsd-gk
username: jetson
password: jetsonucsd

JETSON:

make sure you are in jetson@ucsd-gk:~$ 

in terminal 1
cd projects/race_common
source tools/scripts/source_all.sh
rviz2


CAMERA:
in terminal 2
source tools/scripts/source_all.sh
ros2 launch ucsd_gokart_launch oakd_lr.launch.py 

check rviz2 to visualize
set Global Options to oak
add Camera
set topic to img_raw

in terminal 3
source tools/scripts/source_all.sh


topic list:
/diagnostics 
/joint_states 
/oak/imu/data
/oak/rgb/canera_info
/oak/rgb/image_raw
/oak/rgb/image_raw/compressed 
/oak/gb/image_raw/compressedDepth
/oak/rgb/image_raw/theora
/oak/rgb/image_rect
/oak/rgb/image_rect/compressed 
/oak/rgb/image_rect/compressedDepth
/oak/rgb/image_rect/theora 
/oak/stereo/camera_info 
/oak/stereo/image_raw
/oak/stereo/image_raw/compressed 
/oak/stereo/image_raw/compressedDepth
/oak/stereo/image_raw/theora
/parameter_events /robot_description
/rosout 
/tf
/tf_static

Subscribers:
/diagnostics: diagnostic_msgs/msg/DiagnosticArray 
/parameter_events: cl_interfaces/msg/ParameterEvent

Publishers:
/diagnostics: diagnostic_msgs/msg/DiagnosticArray
/oak/tmu/data: sensor_msgs/msg/Imu
/oak/gb/camera_info: sensor_msgs/msg/CameraInfo
/oak/rgb/image_raw: sensor_msgs/msg/Image
/oak/gb/image_raw/compressed: sensor_msgs/msg/CompressedImage
/oak/rgb/image_raw/compressedDepth: sensor_msgs/msg/CompressedImage
/oak/rgb/image_raw/theora: theora_image_transport/msg/Packet
/oak/stereo/camera_info: sensor_msgs/msg/CameraInfo
/oak/stereo/image_raw: sensor_msgs/msg/Image
/oak/stereo/image_raw/compressed: sensor_msgs/msg/CompressedImage
/oak/stereo/image_raw/compressedDepth: sensor_msgs/msg/CompressedImage
/oak/stereo/image_raw/theora: theora_image_transport/msg/Packet
/parameter _events: cl_interfaces/msg/Parameter Event /rosout: rcl_interfaces/msg/Log

Service Servers:
/oak/describe_parameters: cl_interfaces/srv/DescrtbeParameters
/oak/get_parameter_types: cl_interfaces/srv/GetParameter Types /oak/get_parameters: cl_interfaces/srv/GetParameters
/oak/get_type_description: type_description_interfaces/srv/GetTypeDescription oak/List_parameters: rcl_interfaces/srv/ListParameters
/oak/save_calibration: sto_srvs/srv/Trigger
/oak/save_pipeline: std_srvs/srv/Trigger
/oak/set_camera_info: sensor_msgs/srv/SetCameraInfo
/oak/set_parameters: rel_interfaces/srv/SetParaneters
/oak/set_parameters_atonically: cl_interfaces/srv/SetParametersAtonically
/oak/start_camera: std_srvs/srv/Trigger /oak/stop_camera: std_srvs/srv/Trigger

LiDAR:
in terminal 3
ros2 launch ucsd_gokart_launch livox.launch.py 

check rviz2 to visualize
set Global Options to 
set topic to 

topics that the LiDAR publishes to:

GNSS:
in terminal 4
ros2 launch ucsd_gokart_launch septentrio.launch.py 

check rviz2 to visualize
set Global Options to 
set topic to 

topics that the GNSS publishes to:

other commands:
ros2 launch ucsd_gokart_launch oakd_lr_camera_base.launch.py
ros2 launch ucsd_gokart_launch oakd_lr_yolo.launch.py
ros2 launch ucsd_gokart_launch livox.launch.py
ros2 launch ucsd_gokart_launch septentrio.launch.py 
ros2 node list
ros2 topic list
ros2 node info
ros2 topic info

