# Git 如何同步上游分支代码?

![](https://img-blog.csdnimg.cn/20200815212034489.png)

> 小伙伴们，当参与开源项目或者采用 `Fork` 模式来协同开发时，常常会在自己的 `Fork` 分支上提交各种修改。

但是有一个问题? **上游仓库，也就是源分支代码更新了，我们 `Fork` 的下游分支，怎么同步上游仓库的更新呢？**

**本文是 Git 小知识系列文章的第一篇，以后将不定时的推送开发中常见的 Git 问题解决方案，Git 使用小技巧。**

下面让我们来看看标准的七步法方案，轻松搞定这个问题。

## 第一步：查看所有远程库的远程地址

`git remote -v`

## 第二步：添加源分支 URL

`git remote add upstream [源项目 URL]`

## 第三步：检查所有远程库的远程地址

`git remote -v`

## 第四步：从源分支获取最新的代码

`git fetch upstream`

## 第五步：切换到主分支

`git checkout master`

## 第六步：合并本地分支和源分支

`git merge upstream/master`

## 第七步：Push 到 Fork 分支

`git push`

## 愿者上钩,关注公号

文章首发在【前端时空】公众号
[如何同步上游分支代码？](https://mp.weixin.qq.com/s/k3J8aUfqWCRvkBWCwixx3A)


