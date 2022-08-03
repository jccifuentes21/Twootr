# App Idea

Twootr- a Twitter basic clone

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (username section):

As a user,
I want to edit my username
I want to change the image of the user every time the username changes
I want to see that username with every twoot that I create

# Story 2 (Twoot Form):

As a user,
I want to be able to write a Twoot
Enable the twoot button whenever there is text,
Disable the twoot button when there is no text, or the text is longer than 140 characters,
Warn the user that the twoot is more than 140 characters

# Story 3 (Twoot Feed):

As a user,
I wnat to be able to see all the twoots,
see the user who posted the twoot as well as the profile image,
See when the user posted the twoot
Click on the like, flag or retwoot button


# Data Structure

```js

//new twoot
{newTwoot: {
    author:"Henry David Thoreau",
    content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
    authorSlug:"henry-david-thoreau",
    dateAdded:"2022-07-06"
}}

//avatar svg
`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`;



# HTML Structure

- body
  - header
    - h1 title
    -button 'write a new twoot' //takes the user back to the top
  - main
    -Username and logo
      -Logo of the user
      -user name 
        -name
        -edit button
      -username @
    -Compose a twoot
      -form
        -input label
        -input
        -button
        -word counter
    -Twoot Feed
      -Card
        -twoot header
          -logo
          -author
          -username @
        -twoot content
          -twoot content
        -twoot footer
          -how many days ago this was twooted
          -group of buttons 
            -flag
            -retwoot
            -like

# Component Structure

- App
  - Header
  - Main (UserInfo, TWootForm, TwootFeed)
    -UserInfo
    -TwootForm
    -TwootFeed
      -Twoot
# Data Map

# Styling Patterns

  -Colors:
    -Navbar / Button : #711a75
    -Background Header : #413f42
    -Background Main : #f4f1ec
    -Active Icons : f73d93
    -Font / Box shadow : #888888

  -Fonts (Google):
    -Logo / Button : Permanent Marker
    -Main : Kanit