---
sidebar_position: 2
title: Plugin's config.yml
id: plugin-config-yaml
---

Using `config.yml` you can modify various aspect of the plugin to suite your need.
In this section we will discuss about the details of those variables.

#### Content of config.yml
```yml title=plugins/Minetrax/config.yml
#    ███╗   ███╗██╗███╗   ██╗███████╗████████╗██████╗  █████╗ ██╗  ██╗
#    ████╗ ████║██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚██╗██╔╝
#    ██╔████╔██║██║██╔██╗ ██║█████╗     ██║   ██████╔╝███████║ ╚███╔╝
#    ██║╚██╔╝██║██║██║╚██╗██║██╔══╝     ██║   ██╔══██╗██╔══██║ ██╔██╗
#    ██║ ╚═╝ ██║██║██║ ╚████║███████╗   ██║   ██║  ██║██║  ██║██╔╝ ██╗
#    ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
#                            Created By: Xinecraft
#                      Support: https://discord.gg/Hzfj27k

# This will enable or disable the Minetrax plugin
enabled: true
# The website address that will be linked. (Example: https://minetrax.xinecraft.com)
api-host:
# This is found on your website.  In Admin Section > Settings > Plugin
api-key:
# This is also found on your website.  In Admin Section > Settings > Plugin
api-secret:
# This is the id of the server on your website.  This has to be a numeric value. Can be found in Admin Section > Servers
server-id:
# Your webquery ip address.  Most of the time this can be left at 0.0.0.0
webquery-host: 0.0.0.0
# The port that you opened so plugin and website can communicate. Make sure this port is not already take and can be open.
webquery-port: 25569
# This enables the sending of console logs to web.
enable-consolelog: true
# This enables the in-game chat feature.
enable-chatlog: true
# Sends server intel reports like cpu usage, memory etc. to website.
report-server-intel: true
# Sends player intel to website for better analysis.
report-player-intel: true
# Message format that will be sent when sending message from website to game
web-message-format: '&b[WEB]&r {USERNAME} {MESSAGE}:&r'
# Sends a reminder to player to link their account to website.
remind-player-to-link: true
# How often to send the reminder to player.  This value is in seconds (300 seconds = 5 minutes)
remind-player-interval: 300
# The message send to player to remind them to link their account
remind-player-link-message:
  - "&lHey there! It seems you haven't linked your player in web yet."
  - "&lLink now and earn rewards & perks!"
  - "&lType /account-link to begin"
  - "&oIf you have already linked and getting this message try rejoining the server"
# If this is enabled it will send whois information about players when they join the server
enable-whois-on-player-join: true
# If this is enabled players with permission can run the /webwhois or /ww command
enable-whois-on-command: true
# This is the name of the permission players need to be able to use /ww command
whois-admin-permission-name: ww.admin
# Message that is sent when /ww finds no players
whois-no-match-found-message: "&4&lNo matching player found with your whois query"
# This is the format of message sent when someone joins the server for the first time
whois-player-on-first-join-message:
  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"
  - "&e&oNo data found for this player on web!"
# This is the format of message that is sent when player joins the server
whois-player-on-join-message:
  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
# This is the format of message that is sent when player runs /ww command
whois-player-on-command-message:
  - "&a&l{USERNAME}&r is from &a&l{COUNTRY}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
# This is the format of message that is sent when admin runs /ww command
whois-player-on-admin-command-message:
  - "&a&l{USERNAME}&r is from &a&l{GEO}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
# This is the message sent when there are more than 1 players found
whois-multiple-players-title-message: '&a&lThere is total &e&l{COUNT}&r &a&lplayers found.'
# This is the message sent to show list of players found
whois-multiple-players-list-message: '&6#{POSITION}&r - &b{USERNAME}&r'
# This is how long before player is considered AFK in seconds. Player Intel keep track of AFK activity for Analytics..
# If you use some sort of afk plugin it is recommended to set this time to match.  (300 seconds = 5 minutes)
afk-threshold-in-seconds: 300
# If this is enabled this will deploy a firework when a player joins the server
enable-firework-on-player-join: false
# If this is enabled this will only deploy a firework when player joins server for first time
enable-firework-on-player-first-join: false
# How many fireworks will be sent when player joins
join-fireworks-amount: 2
```
