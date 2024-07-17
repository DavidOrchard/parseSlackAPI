#!/usr/bin/env zx
// https://www.reddit.com/r/Slack/comments/9d4mke/how_to_list_inactive_accounts/
import USERS from './test.json' assert { type: 'json' }

const filteredUsers = USERS.members.filter((user) => user.deleted)
filteredUsers.sort((a,b) => b.updated - a.updated)
filteredUsers.forEach((user) => console.log(user.profile.real_name, user.profile.title, new Date(user.updated * 1000).toUTCString()))
