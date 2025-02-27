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

JETSON (TERMINAL 1):
make sure you are in jetson@ucsd-gk:~$ 

cd projects/race_common
source tools/scripts/source_all.sh
rviz2

CAMERA (TERMINAL 2):
source tools/scripts/source_all.sh
ros2 launch ucsd_gokart_launch oakd_lr.launch.py 
ros2 launch ucsd_gokart_launch oakd_lr_yolo.launch.py 
ros2 launch ucsd_gokart_launch oakd_lr_camera_base.launch.py
ros2 launch ucsd_gokart_launch multi_cam.launch.py 

check rviz2 to visualize
set Global Options to oak
add Camera
set topic to img_raw


LiDAR (TERMINAL 3):
cd projects/race_common
source tools/scripts/source_all.sh
ros2 launch ucsd_gokart_launch livox.launch.py 

check rviz2 to visualize
set Global Options to livox
add PointCloud 2
add Camera
set topic to ???


GNSS (TERMINAL 4):
cd projects/race_common
source tools/scripts/source_all.sh
ros2 launch ucsd_gokart_launch septentrio_gnss.launch.py 

check rviz2 to visualize
set Global Options to ???
add ???
set topic to ???


RTC (TERMINAL 5):
cd projects/race_common
source tools/scripts/source_all.sh
ros2 launch ucsd_gokart_launch rtc.launch.py 

check rviz2 to visualize
set Global Options to ???
add ???
set topic to ???