---
sidebar_position: 1
title: Installing Plugin
id: installing-plugin
---

:::tip Add your minecraft server first!
You need to add your minecraft server to web before continuing to add Minetrax plugin.

[Create here](../tutorials/adding-minecraft-server.md) to know how to add your server.
:::

## Download
Firstly, download the latest __[MineTrax.jar](https://github.com/MineTrax/plugin/releases)__ file from releases section of github and put it inside of `plugins` folder of your Minecraft server.

Start your server and it should create a `Minetrax/config.yml` file in your plugins folder, which should look something like:

```yml title=plugins/Minetrax/config.yml
enabled: true
api-host:
api-key:
api-secret:
server-id:
webquery-host: 0.0.0.0
webquery-port: 25569
...
```

## Setup
In next step you need to know few things:
 1. server-id
 2. api-host
 3. api-key
 4. api-secret

### server-id
This is unique identifier of your server.
After you have [added your server](../tutorials/adding-minecraft-server.md), you can view your server id from listing page.

### api-host
API host is your url at which minetrax will be running. eg: `https://yourdomain.com`

### api-key & api-secret
API key and secret are keys used to protect communication between minetrax plugin and the web. You can find in __Plugins Setting__ section of web admin sidebar.
:::warning
Make sure to keep your api key and secret private and not share those with anyone. It's are not public information.
:::