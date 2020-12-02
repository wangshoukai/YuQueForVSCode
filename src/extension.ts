// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "yuque" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
		// let disposable = vscode.commands.registerCommand('yuque.start', () => {
		// 	// The code you place here will be executed every time your command is executed

		// 	// Display a message box to the user
		// 	vscode.window.showInformationMessage('wwww from yuque!');
		// });

		// context.subscriptions.push(disposable);

		let disposable = vscode.commands.registerCommand('yuque.start', function () {
			// The code you place here will be executed every time your command is executed
			// 1.创建并显示Webview
			const panel = vscode.window.createWebviewPanel(
				// 该webview的标识，任意字符串
				'yuque',
				// webview面板的标题，会展示给用户
				'语雀',
				// webview面板所在的分栏
				vscode.ViewColumn.One,
				// 其它webview选项
				{
					enableScripts: true, // 启用JS，默认禁用
					retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
				}
	 
			);
			//设置标题前图标
			// panel.iconPath = {
			// 	dark: vscode.Uri.file(context.extensionPath + '/Images/iconDark.png'),
			// 	light: vscode.Uri.file(context.extensionPath + '/Images/iconBlack.png')
			// };
	 
			panel.webview.html = `<!DOCTYPE html>
								<html lang="en">
								<head>
									<meta charset="UTF-8">
									<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
									<meta content="portrait" name="x5-orientation">
									<meta content="true" name="x5-fullscreen">
									<meta content="portrait" name="screen-orientation">
									<meta content="yes" name="full-screen">
									<meta content="webkit" name="renderer">
									<meta content="IE=Edge" http-equiv="X-UA-Compatible">
									<title>语雀</title>
									<style>
									html,body,iframe{
										width:100%;
										height:100%;
										border:0;
										overflow: hidden;
									}
									</style>
								</head>
								<body>
									<iframe src="https://www.yuque.com/dashboard"/>
								</body>
								</html>`;
		});
	 
		context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
