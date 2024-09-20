---
title: Design Goals, Features, and VSD Analysis
layout: doc
---

# This is Honk!!

![A Goose](../../assets/images/goose.jpg)

# Naming and Audience

The name I am going to give my social media pp is "Honk!!" This is inspired by the geese who were harassing me while I was thinking about the name for this project. The goal of this platform will be to create a more approachable forum based social media platform, based on the sense that our current ones (4chan, reddit, tumblr, etc) tend to come off as intimidating to new social media users. We want to capitalize on that in order to convert that audience into our userbase. Our platform will provide a friendly environment where you can interact with your own communities, without the abrasiveness and complexity of some of the modern platforms. 


# Features

1. "Karma" - What I am going to call karma is slightly different than what other sites consider karma. I want to use karma as a quasi-moderation tool. This will help determine "quarantine" zones in the platform and based on user reports and downvotes will help keep my site a safer place. This can also be used in a positive way to identify trustworthy and popular portions of the site.

2. "Quarantining" - inspired slightly by Reddit's manual quarantine system, I wwant to have the ability for the broad community across my platform to have a say in what is shown to them on their explore pages, and that includes stuff they believe should not be available there. Therefore, I am going to be using a system where certain subforums are made harder to access only by people who do not actively acccess them.

3. "Reports" - I will also have (rather plainly) a system for reporting posts for more serious violations (mainly criminal, think doxxing, violence, illegal media). I plan on having these be very high priority on the function of my platform, as it is inherent in the goal of creating an approachable platform that users do not run into these things.

4. "Voting" - This will be a similar system to what is available on most forum websites. I will be using a more complex recommendation alogrithm and posts will not show up as often outside of the forum just based on up or downvotes, but they will have a bearing on how things can be filtered and shown while inside a specific subforum.

5. "Subforum-Specific Profiles" - I want to have a system where you can modify your profile (a feature father down this list now) a certain way when people interact with your account through a certain forum. this allows people better control over how people see them in their respective communities.

6. "Forum Basic Features" - This "feature" encapsulates what I consider to be basic forum functionalities. This includes posting, threaded comments, linked posting, post modification and deletion.

7. "Social Basic Features" - This (similar to above), encapsulates basic functionalities of social media interations. These are along the lines of blocking, direct messages, tagging, search functions, profile interaction, etc.

8. "Profile Engagement" - In sorting content that is likely to be engaged with by the user, I want to do more than just look at what is popular at the moment. I also want to do more that just a matching algorithm with the things they have already engaged with. In pursuing this, I believe it is also important to track what users have negatively engaged with. Users will be steered away from topics that they do not enjoy engaging with, and this allows me more freedom to allow people to see more of my platform when I am not pigeonholing them explicitly into similar posts that they already interacted positively.

9. "Pubbing" - I will be doing my best to respect user privacy in the creation of this app. Unfortunately, this means I will also be not making as much money from advertizing and network traffic, so I'd like to create some kind of monetization strategy through user interaction. An idea that I had was to allow people to pay to get their posts more attention, but this will create exploits in my platform that might need to be resolved.

10. "Privacy Posting" - I want the option to alter the privacy of the posts you make so that you can control who can see it. In particular, you should be able to choose between: everyone can see it, members of this subforum can see it, my followers can see it, I can see it. This will allow people to more closely control who engages with their content.

11. "Awards" - I want to add "awards" to my platform. These will be visible awards to peoples' posts and accounts, and could serve as a monetization model for both user creators and the platform. In a way, they could function much like Twitch donations do, where the creator of the post gets a monetary reward for the awards they receive.

12. "Highlight Scrolling" - This is a crossover between forum functions and more modern social media functions. In order to increase engagement, I want to have a format where there is only one post being visible at a time on the home page. This will also encapsulate an "infinite scroll" function similar to Instagram's function. This may cause problems with over-engagement (see VSD Screen time below).

13. "Profile Data Scrambling" - As a privacy measure, we will be using differential privacy measures when collecting user data. When conducting research, we will be scrambling user data with noise in order to ensure proper anonymization. 

14. "Configurable Notifications" - This is seen in some other platforms but I have not seen it on a forum based social media. I want users to be able to select what subforums and/or creators they will receive notifications from instead of simply sending notifications out of the blue.

15. "Profile Highlight Page" - This will be a specific UI feature. You will be able to cater (or have AI create) a landing page for your profile that is a simple highlight page that encapsulates any activity you'd like to show off as well as your interests and basic profile information.

16. "Profile Customization" - I want to have a widget based customization model for how your profile appears to other people. This allows deep personalization, and could be used for individuals and communities to distinguish themselves from others. As mentioned above, I'd like users to be able to alter how they appear to people who engage with them from different subforums.

17. "Hibernation" - Profile hibernation will pause all activity and notifications from the platform, and significantly limit functionality. This can be useful for people who are wanting to take a break from the platform, or people who are trying to limit their social media use to a certain amount.

18. "Restrictions" - As opposed to weird "parental controls", I'd like to let people set their own limits on what their profile is allowed to do on the platform. For instance, the most simple example is setting a screen time limit for yourself. You will still be able to access direct messages, along with other time sensitive features, but this may allow people to interact with my platform in a more healthy manner, and that means a lot to me.

19. "Personal Content Moderation" - I would like to have personalization options that allow you to filter exactly what kind of content you would like to engage with while on Honk!!. This will go further than just an adult content toggle button and could filter out unwanted subject material that you would not like on your home page. This will keep people from feeling pushed out when they click to their home page and there are just rancid political posts all over it from the upcoming election (this is a not subtle jab at a couple other platforms).

20. "QnA Posts (A2A)" - I want to have a section of either the subforums or the website as a whole where you can create "question" posts, similar to how Quora uses as the basis for its site. This will allow people to more closely engage with their audience through polls, open ended questions, or more. I do want this to be able to be separated, though I'm not sure if that should be a personal configuration option or something I determine myself.




# VSD Analysis



# Stakeholders

Accessibility: In pursuing the "scrollability" that some other platforms have but with a forum format, I will be running into accessibility issues where people may be less able to use my app because of physical or mental ability. In response to this, I will have to include some alternate format of my website, or some kind of "accessibility mode". If I have time, I will be sketching this in order to better visualize what this means for my platform.

Children: If my forum is successful, there will definitely be a large amount of children who make their way onto my platform. I am not in favor of censorship, but I will need to find some way of protecting the younger generation from harmful experiences on my app. After laying out common industry responses to this problem, none of them seem particularly adequate, but I believe the best option would be some form of opt-in function for adult-oriented content. While this still allows children to potentially access the content, it blocks channels for bad actors to access children.

# Time

Aprropriation: In the adoption of a platform, many groups usually segregate themselves into their own niches, whether it be by political opinion, lifestyle, interests, or many other things. I think this can be where forum style social media can really shine. Currently, Reddit will pub popular posts to people on the exlore seciton of the app, but I think it would be cooler to advertize popular communities rather than posts within those communities. Some forums have tried this, but many do not make it very engaging, or instead sort by most recent entries. 

Screen Time: There is a growing issue where people tend to spend too much time on social media. I want engagement on my platform, but I do not want to propogate an extreme unhealthy use of my platform. In pursuing this, I am considering whether warnings on screen time, limits on time used, or limits on posts per day could be effective in keeping people from staying on my platform too long. Instagram recently instituted a screen time warning for minors, but this measure feels inadequate and unnecessary, as it does not seem to accomplish much. I think I could potentially institute a limit on activity that has a bit more breadth than just a daily post limit, and keep people engaged in my platform, but not so absorbed that it becomes a problem.

# Pervasiveness

Politics: By starting a forum based platform, I am going to run into divisive groups that will carve out their own space. This will include extremists, conspiracy theorists, as well as many other groups, and so I need to decide what to do with them. In line with my previous assignment's goals, I would like to do some community driven moderation in order to keep my platform safe for all the users on it. Therefore, it seems that there could be some sort of quarantine system where if enough people "dislike" a group or post, then that post, instead of being deleted, is not published on a public tab and is instead isolated to the community of people who have already seen it.

# Values

Privacy: Forum platforms have historically been places where there are lots of breaches of privacy. While I can keep my customer's privacies intact on my end (non-invasive ad structure, minimal identification stored, etc.), I also need to worry about people's personal privacy on the platform. I think I will have to bend my priority of community driven moderation when it comes to things like this. Particularly blatantly illegal activity will mean I need to have an active moderation team at all times. We can see how not having proper moderation adversely affected sites like Tumblr. We also saw how trying to ban adult content overall almost killed Tumblr, so I need to make sure my moderation team (or moderation algorithm) is performing excellently for cases like this, even if they are almost never used.

Ease of Use:

 



