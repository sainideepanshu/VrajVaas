## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/sainideepanshu/express_typescript_template.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>

clear git History

rmdir /s /q .git                             -- Windows Command Prompt:

(Optional) Modify the project as needed.

```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable

```
echo PORT=3000 >> .env                 --- X do not use this command,instead create .env file manually
```

5. Start the express server

```
npm run dev
```



git init

git add .

git commit -m "Initial commit with fresh start"

git remote add origin https://github.com/your-username/your-new-repo.git

git branch -M main
git push -u origin main