#!/usr/bin/env python
# encoding: utf-8

from fabric.api import local, cd, run, env
from fabric.colors import *

env.hosts = ['root@47.94.18.22', ]
env.password = 'Sqsm1234'


def push(info="fabric auto"):
    show(1)
    local('git status')
    local('git commit -m"%s"' % info)
    local('git push')


def server_update():
    show(2)
    with cd('/var/www/FrontEnd'):
        run('git pull')


def up(info="fabric add"):
    """
    提交代码并在服务器拉取
    :param info: 
    :return: 
    """
    show(3)
    push(info)
    server_update()
    show(4)

def show(i):
    if i == 1:
        print yellow('add and commit settings in local')
    if i == 2:
        print yellow('server remote update')
    if i == 3:
        print green('start---------------------------')
    if i == 4:
        print green('end-----------------------------')
