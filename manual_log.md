# manual_log
manually log activities


## 05-08-2024-office
R:\bytes-and-grains>hugo server
Watching for changes in R:\bytes-and-grains\{assets,content,layouts,themes}
Watching for config changes in R:\bytes-and-grains\hugo.toml, R:\bytes-and-grains\themes\default\hugo.toml
Start building sites …
hugo v0.121.2-6d5b44305eaa9d0a157946492a6f319da38de154+extended windows/amd64 BuildDate=2024-01-05T12:21:15Z VendorInfo=gohugoio

ERROR instagram shortcode: Missing config value for services.instagram.accessToken. This can be set in config.toml, but it is recommended to configure this via the HUGO_SERVICES_INSTAGRAM_ACCESSTOKEN OS environment variable. If you are using a Client Access Token, remember that you must combine it with your App ID using a pipe symbol (<APPID>|<CLIENTTOKEN>) otherwise the request will fail.
You can suppress this error by adding the following to your site configuration:
ignoreErrors = ['error-missing-instagram-accesstoken']
Built in 5378 ms
Error: error building site: logged 1 error(s)

--> Implement in the hugo.toml and it works
ignoreErrors = ['error-missing-instagram-accesstoken']
