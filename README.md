## Deploying the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sfdx auth:web:login -d -a myhuborg
    ```

1. Clone the lwc-recipes repository:

    ```
    git clone https://github.com/msrivastav13/lwc-modal-example.git
    cd lwc-modal-example
    ```

1. Create a scratch org and provide it with an alias (**lwc-recipes** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a embed-flows-lwc
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

1. Open the scratch org:

    ```
    sfdx force:org:open
    ```

1. In App Launcher, click **View All** then select the **Home** tab, and you should see the component.

## Deploying the App to a Developer Edition Org or a Trailhead Playground

Follow this set of instructions if you want to deploy the app to a more permanent environment than a Scratch org.
This includes non source-tracked orgs such as a [free Developer Edition Org](https://developer.salesforce.com/signup) or a [Trailhead Playground](https://trailhead.salesforce.com/).

Make sure to start from a brand-new environment to avoid conflicts with previous work you may have done.

1. Clone this repository:

    ```
    git clone https://github.com/msrivastav13/lwc-modal-example.git
    cd lwc-modal-example
    ```

1. Authorize your Trailhead Playground or Developer org and provide it with an alias (**mydevorg** in the command below):

    ```
    sfdx auth:web:login -s -a mydevorg
    ```

1. Run this command in a terminal to deploy the app.

    ```
    sfdx force:source:deploy -p force-app
    ```

1. If your org isn't already open, open it now:

    ```
    sfdx force:org:open -u mydevorg
    ```

1. In App Launcher, click **View All** then select the **Home** tab, and you should see the component.