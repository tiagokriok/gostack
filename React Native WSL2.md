# React Native no WSL2

## PORT Networking WSL2 and Windows

- WSL2:
  
  ```bash
  ip addr | grep eth0
  ```

- PowerShell as Admin:
  
  ```bash
  netsh interface portproxy add v4tov4 listenport=3333 listenaddress=0.0.0.0 connectport=3333 connectaddress=IP
  ```

## Execute React Native Project

1. Exec AVD

   - Divice ID: `adb devices`
   - List AVD's: `emulator -list-avds`
   - Exec AVD: `emulator -avd NAME_AVD`
  
2. PowerShell

    ```bash
    adb kill-server
    adb -a nodaemon server start
    ```

3. WSL2

   - **Terminal 1**

       ```bash
       npx react-native start --host 127.0.0.1  
       ```

   - **Terminal 2**

       ```bash
       npx react-native run-android --variant=debug --deviceId emulator-5554
       ```
