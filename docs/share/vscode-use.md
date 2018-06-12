---
sidebarDepth: 2
---

# vscode 使用技巧

## 显示所有命令

快捷键：`command + shift + P`

操作步骤：打开一个命令行，输入关键字搜索相关命令，回车执行命令

## 转到文件

快捷键：`command + P`

操作步骤：打开一个命令行，输入文件名，选择相应文件，vscode 将会打开文件

## 万能的 command + P

快捷键：`command + P`

操作步骤：打开一个命令行，输入文件名，选择相应文件，vscode 将会打开文件

提示：打开命令行后，输入 `?` 有相关功能的提示

功能列表：

| 键入关键字 | 功能说明 |
| -------- | ------- |
| 无关键字 | 根据输入匹配当前项目的文件名，打开文件 |
| : | 跳转到当前文件某一行，后面加要跳转的行数 |
| @ | 跳转到当前文件中某‘符号’的位置 (’符号‘可以是 html 标签，css 类名，js 函数名，等) |
| > | 显示并运行命令，同 `command + shift + P` |
| debug | 运行 debug 中设置好的某个配置 |
| task | 运行任务 (任务可以从 package.json 中读取 scripts 内容) |
| ? | 获取有关可进行的操作的帮助 |

注意：因为英文关键字与无关键字功能重复，所以<b>英文关键字后都需要加一个空格</b>才能生效!!!(例如：debug, task, 等)

以上只是其中一部分常用功能，如果想了解更多，使用 `?` 查看