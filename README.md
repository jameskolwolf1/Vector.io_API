
## Overview

This is the backend and API for the VectoirIO website. It will store data and also make API calls to retrieve meaningful information. The data will contain information about the article, posts, comments, solutions, and the version/model of a computer component. 

- The URL for the API will be http://localhost:8080 
    - The reason for this is because the mysql server is local. If the user wants to use something else to host it, they have the freewill to do so.
- Every "computerComponents" will contain unique information

### Tech Stack

> List technologies that will be used in your app, including any libraries to save time or provide more functionality. 
- Javascript
- MySQL
- Express
- Knex
- Cors
    
## Authentication
 - For Authentication, there is a password and it is stored in .env and the variable name is "API_DB_PASSWORD" Also if your MySQL hostname is not "root" then the hostname needs to be changed. 
 - The variable that stored it is "API_DB_HOSTNAME". you can also change the API URL or the Database host ip within that file. 

## API Errors
 - This API may return a 400 or 404 Errors

    ```
    {
     "message": "Error getting Computer Components List"
    }
    ```

## Routes/APL Calls
#### GET /computerComponents
- Return an array of computerComponents objects

    Example response body
    ```
    {
        "id": 1,
        "title": "DisplayPort Cable (DP)",
        "image_product": "http://localhost:8080/Cables/DisplayPort/image_0.jpg",
        "image_info": "http://localhost:8080/Cables/DisplayPort/info_0.jpg",
        "general_info": "A DisplayPort cable is  used to connect a computer or other device to a monitor or display device. It is specifically designed to transmit video and audio signals over a single cable using the DisplayPort standard. DisplayPort cables have a unique connector with 20 or more pins and are available in different lengths to accommodate different distances between the source device and the display device. DisplayPort cables are commonly used in computer systems and can support resolutions up to 8K, high refresh rates and HDR content.They can also be used to daisy- chain multiple display devices, allowing for a multi - monitor setup without the need for multiple cables.",
        "category": "cable"
    },
    {
        "id": 2,
        "title": "HDMI Cable",
        "image_product": "http://localhost:8080/Cables/HDMI/image0.jpeg",
        "image_info": "http://localhost:8080/Cables/HDMI/info_0.jpg",
        "general_info": "HDMI means High-Definition Multimedia Interface, a standard for simultaneously transmitting digital video and audio from a source, such as a computer or TV cable box, to a computer monitor, TV or projector.Originally developed by a consortium of electronics manufacturers, it has been widely adopted with almost all televisions and computer monitors supporting the interface. The goal of the HDMI initiative back in 2002 was to improve on existing connectivity standards(e.g.DVI, component video) by creating a smaller connector, adding support for embedded audio and delivering a higher resolution video signal.Such was HDMI's success that by 2008, shipments of HDMI - enabled devices exceeded those of DVI. By the end of 2009, all HDTVs had at least one HDMI port.",
        "category": "cable"
    },
    ```

#### GET /computerComponents/:id
- Returns detail of a single  computerComponent by id

  Example response body
    ```
    {
    "id": 1,
    "title": "DisplayPort Cable (DP)",
    "image_product": "http://localhost:8080/Cables/DisplayPort/image_0.jpg",
    "image_info": "http://localhost:8080/Cables/DisplayPort/info_0.jpg",
    "general_info": "A DisplayPort cable is  used to connect a computer or other device to a monitor or display device. It is specifically designed to transmit video and audio signals over a single cable using the DisplayPort standard. DisplayPort cables have a unique connector with 20 or more pins and are available in different lengths to accommodate different distances between the source device and the display device. DisplayPort cables are commonly used in computer systems and can support resolutions up to 8K, high refresh rates and HDR content.They can also be used to daisy- chain multiple display devices, allowing for a multi - monitor setup without the need for multiple cables.",
    "category": "cable"
  }
    ```
#### GET /computerComponents/:id/solutions
- Return a list of solutions based on the computerComponent id

    Example response body
    ```
    {
        "id": 1,
        "computerComponents_id": 1,
        "text": "Check and Reseat Connections: Ensure that the DP cable is fully inserted into both the monitor and graphics card ports. A loose connection is often the cause of flickering or no signal. Reseat the cable to make sure it’s securely connected."
    },
    {
        "id": 2,
        "computerComponents_id": 1,
        "text": "Use a High-Quality Cable: If you're experiencing resolution or signal issues, consider using a certified, high-quality DP cable. Cheap or poorly made cables may not support high bandwidth, leading to problems at higher resolutions or refresh rates."
    }, ...
    ```
#### GET /computerComponents/:id/versionOrModels
- Return a list of versions or models for that computerComponent by id

    Example response body
    ```
    {
        "id": 1,
        "title": "DisplayPort 1.0 (2006)",
        "computerComponents_id": 1,
        "info1": "Max Resolution: 2560x1600 at 60Hz",
        "info2": "Bandwidth: 8.64 Gbps",
        "info3": "Key Features: First version to introduce a digital interface for connecting video and audio, primarily targeted for computer monitors."
    },
    {
        "id": 2,
        "title": "DisplayPort 1.1 (2007)",
        "computerComponents_id": 1,
        "info1": "Max Resolution: 2560x1600 at 60Hz",
        "info2": "Bandwidth: 8.64 Gbps",
        "info3": "Key Features: Added support for DisplayPort-to-HDMI/DVI adapters and HDCP (High-bandwidth Digital Content Protection) for secure transmission of high-definition content."
    },
    {
        "id": 3,
        "title": "DisplayPort 1.2 (2010)",
        "computerComponents_id": 1,
        "info1": "Max Resolution: 4K at 60Hz",
        "info2": "Bandwidth: 17.28 Gbps",
        "info3": "Key Features: Introduced support for 4K resolution at 60Hz, Multi-Stream Transport (MST) for daisy-chaining multiple monitors, and increased bandwidth for more demanding applications."
    },.... 
    ```
#### GET /computerComponents/:id/posts
- Return a list of posts by computerComponent id

    Example response body
    ```
    {
        "id": 1,
        "computerComponents_id": 1,
        "title": "No Signal Detected: Why is My Monitor Not Working?",
        "description": "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        "post_date": "2024-10-03T10:55:40.000Z"
    },
    {
        "id": 2,
        "computerComponents_id": 1,
        "title": "Screen Flickering at High Refresh Rate – What’s Going On?",
        "description": "My monitor flickers like crazy at 144Hz with a DisplayPort connection, but it’s fine at 60Hz. Could this be a bandwidth problem with the cable, or should I look into the monitor settings?",
        "post_date": "2024-10-03T10:55:40.000Z"
    },
    {
        "id": 3,
        "computerComponents_id": 1,
        "title": "Getting Audio but No Video on DisplayPort Connection",
        "description": "I’m confused! My DisplayPort connection is delivering audio but no video. I’ve tried restarting everything and updating drivers. Could it be the cable, or is there something wrong with the graphics settings?",
        "post_date": "2024-10-03T10:55:40.000Z"
    }, ....
    ```
#### POST /computerComponents/:id/posts
- Creates a new post for this computerComponent

    Post body example 
    ```
    {
        "title": "No Signal Detected: Why is My Monitor Not Working?",
        "description": "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly."
    }
    ```
    Response body example 
    ```
    {
        "id": 1,
        "computerComponents_id": 1,
        "title": "No Signal Detected: Why is My Monitor Not Working?",
        "description": "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        "post_date": "2024-10-03T10:55:40.000Z"
    }
    ```
#### GET /posts
- Return a list of all the posts

    Example response body
    ```
    {
        "id": 1,
        "computerComponents_id": 1,
        "title": "No Signal Detected: Why is My Monitor Not Working?",
        "description": "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        "post_date": "2024-10-03T10:55:40.000Z"
    },
    {
        "id": 2,
        "computerComponents_id": 1,
        "title": "Screen Flickering at High Refresh Rate – What’s Going On?",
        "description": "My monitor flickers like crazy at 144Hz with a DisplayPort connection, but it’s fine at 60Hz. Could this be a bandwidth problem with the cable, or should I look into the monitor settings?",
        "post_date": "2024-10-03T10:55:40.000Z"
    },
    {
        "id": 3,
        "computerComponents_id": 1,
        "title": "Getting Audio but No Video on DisplayPort Connection",
        "description": "I’m confused! My DisplayPort connection is delivering audio but no video. I’ve tried restarting everything and updating drivers. Could it be the cable, or is there something wrong with the graphics settings?",
        "post_date": "2024-10-03T10:55:40.000Z"
    }....
    ```
#### GET /posts/:id/comments
- Return a list of comments by posts ID

    Example response body
    ```
    {
        "id": 1,
        "posts_id": 1,
        "text": "Try using a different DisplayPort cable or port on the monitor and PC to rule out a faulty cable or port",
        "likes": 4
    },
    {
        "id": 2,
        "posts_id": 1,
        "text": "Ensure both your monitor and PC support the same DP version (e.g., DP 1.2, DP 1.4)",
        "likes": 3
    },
    {
        "id": 3,
        "posts_id": 1,
        "text": "Sometimes, outdated graphics drivers can cause issues. Update your GPU drivers to the latest version",
        "likes": 0
    },.....
    ```
#### POST /posts/:id/comments
- Creates a new Comment for specific posts

    Post body example
    ```
    {
        "text": "Try using a different DisplayPort cable",
    }
    ```
#### PUT /comments/:id
- Update the likes on that specific comment

    Regular Example Comment
    ```
    {
        "id": 1,
        "posts_id": 1,
        "text": "Try using a different DisplayPort cable or port on the monitor and PC to rule out a faulty cable or port",
        "likes": 4
    }
    ```

    PUT body example
    ```
    {
        "likes": 5,
    }
    ```
    response body example
    ```
    {
        "id": 1,
        "posts_id": 1,
        "text": "Try using a different DisplayPort cable or port on the monitor and PC to rule out a faulty cable or port",
        "likes": 5
    }
    ```




