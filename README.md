如何避免git每次提交都输入密码
vim /home/chinaestone/.git-credentials

输入内容
https://{username}:{password}@github.com

保存退出后执行下面命令
git config --global credential.helper store

执行完后
/home/chinaestone/.gitconfig 会新增一项
helper = store
这是再执行git push/pull的时候就不会在要求输入密码了


getmoji.



windows使用git时出现：warning: LF will be replaced by CRLF
原创 2014年03月08日 10:42:48 58082
windows中的换行符为 CRLF， 而在linux下的换行符为LF，所以在执行add . 时出现提示，解决办法：
[plain] view plain copy
$ rm -rf .git  // 删除.git  
$ git config --global core.autocrlf false  //禁用自动转换    

然后重新执行：
[plain] view plain copy
$ git init    
$ git add .  

如何避免git每次提交都输入密码
vim /home/chinaestone/.git-credentials

输入内容
https://{username}:{password}@github.com

保存退出后执行下面命令
git config --global credential.helper store

执行完后
/home/chinaestone/.gitconfig 会新增一项
helper = store
这是再执行git push/pull的时候就不会在要求输入密码了


getmoji.