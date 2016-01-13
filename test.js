dchq=require('./lib/dchq');
obj=new dchq({username: 'admin@dchq.io', password:'admin123'});

obj.getBlueprints().then(function(blueprints){
  console.log(blueprints);
}, function(err){
  console.log(err);
});

/*

obj.createBlueprint({
"name": "amal-Nginx-test",
"blueprintType": "DOCKER_COMPOSE",
"version": "2.0",
"yml": ""
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getBlueprintsManage({'page':1, 'pageSize':1}).then(function(blueprints){
  console.log(blueprints);
}, function(err){
  console.log(err);
});

obj.getBlueprintsManageById('4028818650d4aca10150d4bf63470003').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.searchBlueprintsLibraryPage({'q': 'amal'}).then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.getBlueprintById('2c91808651a95c4d0151da0e9b087679').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.updateBlueprintById('2c91808651a95c4d0151da0e9b087679', {
	'description': 'Created by amal for testing',
	'name': 'amal-Nginx-test-again-again',
	"blueprintType": "DOCKER_COMPOSE",
	"version": "2.0",
	"yml": ""
}).then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.deleteBlueprintById('2c91808651a95c4d0151da0e9b087679').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.starBlueprintById('2c91808651a95c4d0151da0e9b087679').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.unstarBlueprintById('2c91808651a95c4d0151da0e9b087679').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.getBlueprintYamlById('402881864e1a36cc014e1a399cf90101').then(function(blueprint){
  console.log(blueprint);
}, function(err){
  console.log(err);
});

obj.getStarredBlueprints().then(function(blueprints){
  console.log(blueprints);
}, function(err){
  console.log(err);
});


obj.getDatacenters().then(function(datacenters){
  console.log(datacenters);
}, function(err){
  console.log(err);
});

obj.getDatacenterById('2c91808651a95c4d0151c4cfabf21cb3').then(function(datacenter){
  console.log(datacenter);
}, function(err){
  console.log(err);
});

obj.createDatacenter({
	'name': 'amal-test-datacenter'
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.updateDatacenterById('2c91808651a95c4d0151dc98f37a0548', {
	'name': 'amal-test-datacenter-edited'
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deleteDatacenterById('2c91808651a95c4d0151c4cfabf21cb3').then(function(datacenter){
  console.log(datacenter);
}, function(err){
  console.log(err);
});

obj.getDatacentersManage().then(function(datacenters){
  console.log(datacenters);
}, function(err){
  console.log(err);
});

obj.searchDatacenters({'q': 'amal'}).then(function(datacenters){
  console.log(datacenters);
}, function(err){
  console.log(err);
});


obj.getBuilds().then(function(builds){
  console.log(builds);
}, function(err){
  console.log(err);
});

obj.getBuildsManage().then(function(builds){
  console.log(builds);
}, function(err){
  console.log(err);
});

obj.getBuildsManageById('addsaf').then(function(build){
  console.log(build);
}, function(err){
  console.log(err);
});

obj.searchBuilds({'q': 'amal'}).then(function(builds){
  console.log(builds);
}, function(err){
  console.log(err);
});

obj.searchActiveEntitled({'q': 'amal'}).then(function(builds){
  console.log(builds);
}, function(err){
  console.log(err);
});

obj.reindexBuilds().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getBuildById('adsa').then(function(build){
  console.log(build);
}, function(err){
  console.log(err);
});

obj.createBuild({'name': 'amal-test-build', 'repository': 'dsfs', 'tag': 'test'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.buildNow({'name': 'amal-test-build', 'repository': 'dsfs', 'tag': 'test'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.updateBuildById('adsfdsf', {'name': 'amal-test-build-edited', 'repository': 'dsfs', 'tag': 'test'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deleteBuildById('sdkfmk').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getDockerservers().then(function(dockerservers){
  console.log(dockerservers);
}, function(err){
  console.log(err);
});

obj.getDockerserversManage().then(function(dockerservers){
  console.log(dockerservers);
}, function(err){
  console.log(err);
});

obj.getDockerserverById('asda').then(function(dockerserver){
  console.log(dockerserver);
}, function(err){
  console.log(err);
});

obj.getDockerserverStatusById('asda').then(function(status){
  console.log(status);
}, function(err){
  console.log(err);
});

obj.getDockerserverPingById('asda').then(function(ping){
  console.log(ping);
}, function(err){
  console.log(err);
});

obj.createDockerserver({
    "name": "kjwdnfkjs",
    "hostOrIp": "akjnf",
    "description": "lnsdknfkl",
    "size": 1,
    "inactive": false,
    "dataCenter": {}
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.updateDockerserverById('asdasdhj', {
    "name": "kjwdnfkjs",
    "hostOrIp": "akjnf",
    "description": "lnsdknfkl",
    "inactive": false
}).then(function(dockerserver){
  console.log(dockerserver);
}, function(err){
  console.log(err);
});

obj.deleteDockerserverById('asda').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchDockerservers({'q': 'amal'}).then(function(dockerservers){
  console.log(dockerservers);
}, function(err){
  console.log(err);
});

obj.reindexDockerservers().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.monitorDockerserverById('asd').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getDockerserversManageById('asd').then(function(dockerserver){
  console.log(dockerserver);
}, function(err){
  console.log(err);
});

obj.getApps().then(function(apps){
  console.log(apps);
}, function(err){
  console.log(err);
});

obj.getAppById('dsafds').then(function(app){
  console.log(app);
}, function(err){
  console.log(err);
});

obj.getActiveApps().then(function(apps){
  console.log(apps);
}, function(err){
  console.log(err);
});

obj.getDestroyedApps().then(function(apps){
  console.log(apps);
}, function(err){
  console.log(err);
});

obj.deleteAllDestroyedApps().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deployAppById('dsafds').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getAppsDeploy().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.stopAppById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.startAppById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.restartAppById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.destroyAppById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getAppBackupsById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppBackupById('sdfs', {'note': 'aaf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppBackupNowById('sdfs', {'note': 'aaf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getAppPluginsById('sdfs').then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.createAppPluginById('sdfs', {'continuous': true, 'note': 'aaf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppPluginNowById('sdfs', {'continuous': true, 'note': 'aaf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.appRollbackById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.appRollbackNowById('sdfs', {'inactive': true, 'note': 'aaf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getAppScaleOutCreateById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppScaleOutCreateById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppScaleOutCreateById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getAppScaleInCreateById('sdfs').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppScaleInById('sdfs', {'note': 'sadfdsf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createAppScaleInNowById('sdfs', {'note': 'sadfdsf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchApps({'q': 'sadfdsf'}).then(function(apps){
  console.log(apps);
}, function(err){
  console.log(err);
});

obj.appMonitorById('dsgfdg').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getUsergroups().then(function(usergroups){
  console.log(usergroups);
}, function(err){
  console.log(err);
});

obj.getUsergroupById('dsgfdg').then(function(usergroup){
  console.log(usergroup);
}, function(err){
  console.log(err);
});

obj.createUsergroup({'name': 'sadfdsf'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.updateUsergroupById('2c91808651a95c4d0151ea023320555b', {'name': 'amal'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deleteUsergroupById('2c91808651a95c4d0151ea023320555b').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchUsergroups({'q': 'sadfdsf'}).then(function(usergroups){
  console.log(usergroups);
}, function(err){
  console.log(err);
});

obj.getProfiles().then(function(profiles){
  console.log(profiles);
}, function(err){
  console.log(err);
});

obj.getProfileById('dsgfdg').then(function(profile){
  console.log(profile);
}, function(err){
  console.log(err);
});

obj.updateProfileById('dsgfdg', {'name': 'amal'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deleteProfileById('dsgfdg').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createProfile({'name': 'amal', 'defaultProfile': true}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchProfiles({'q': 'amal'}).then(function(profiles){
  console.log(profiles);
}, function(err){
  console.log(err);
});

obj.searchMessages({'q': 'amal'}).then(function(messages){
  console.log(messages);
}, function(err){
  console.log(err);
});

obj.getUnreadMessages().then(function(messages){
  console.log(messages);
}, function(err){
  console.log(err);
});

obj.getOpenMessages().then(function(messages){
  console.log(messages);
}, function(err){
  console.log(err);
});

obj.getMessageById('sfds').then(function(message){
  console.log(message);
}, function(err){
  console.log(err);
});

obj.archiveMessageById('sfds').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getArchivedMessages().then(function(messages){
  console.log(messages);
}, function(err){
  console.log(err);
});

obj.deleteMessageById('sfds').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getUsers().then(function(users){
  console.log(users);
}, function(err){
  console.log(err);
});

obj.getUserById('sfds').then(function(user){
  console.log(user);
}, function(err){
  console.log(err);
});

obj.updateUserById('sfds', {
	'firstname': 'dfsdf'
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deleteUserById('sfds').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createUser({
    "username": "amal-test",
    "password": "password",
    "email": "amal@amal.com",
    "firstname": "amal",
    "lastname": "francis",
    "enabled": true,
    "company": "amal",
    "jobTitle": "amal",
    "phoneNumber": "1234567890"
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchUsers({'q': 'amal'}).then(function(users){
  console.log(users);
}, function(err){
  console.log(err);
});

obj.updateUserProfileById('2c91808651a95c4d0151f2c0aaa611d9', {
    "company": "amal company"
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getUserLoginStatus().then(function(status){
  console.log(status);
}, function(err){
  console.log(err);
});

obj.signupUser({
    "username": "amal-test",
    "password": "password",
    "email": "amal@amal.com",
    "firstname": "amal",
    "lastname": "francis",
    "company": "amal"
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.signupTenantUser({
    "username": "amal-test",
    "password": "password",
    "email": "amal@amal.com",
    "firstname": "amal",
    "lastname": "francis",
    "company": "amal"
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchUserByEmail('amalfra@gmail.com').then(function(user){
  console.log(user);
}, function(err){
  console.log(err);
});

obj.generateUserPasswordResetByEmail('amalfra@gmail.com').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.resetUserPasswordResetById('hjsdfhd', 'password').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.createPlugin({
    "name": "amal-test",
    "version": "1.0",
    "license": "MIT",
    "description": "amal test",
		"baseScript": 'test'
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getPluginsManage().then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.getPluginManageById('sdfs').then(function(plugin){
  console.log(plugin);
}, function(err){
  console.log(err);
});

obj.getPluginsStarred().then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.updatePluginById('2c91808651a95c4d0151f318c64f1444', {
    "name": "amal-test updated"
}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.deletePluginById('2c91808651a95c4d0151f318c64f1444').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchPlugins({'q': 'amal'}).then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.reindexPlugins().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.searchActiveEntitledPlugins({'q': 'amal'}).then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.starPluginById('2c91808651a95c4d0151f318c64f1444').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.unstarPluginById('2c91808651a95c4d0151f318c64f1444').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getPlugins().then(function(plugins){
  console.log(plugins);
}, function(err){
  console.log(err);
});

obj.getCloudproviderRegionsById('sdkjfn').then(function(regions){
  console.log(regions);
}, function(err){
  console.log(err);
});

obj.getCloudproviderMachinetypesById('sdkjfn').then(function(types){
  console.log(types);
}, function(err){
  console.log(err);
});

obj.getCloudproviderMachineimagesByIdRegion('sdkjfn', 'sadfdsf').then(function(images){
  console.log(images);
}, function(err){
  console.log(err);
});

obj.getCloudproviderNetworksByIdRegion('sdkjfn', 'sadfdsf').then(function(networks){
  console.log(networks);
}, function(err){
  console.log(err);
});

obj.getCloudproviderSecuritygroupsByIdRegion('sdkjfn', 'sadfdsf').then(function(networks){
  console.log(networks);
}, function(err){
  console.log(err);
});

obj.getRegistryaccounts().then(function(registryaccounts){
  console.log(registryaccounts);
}, function(err){
  console.log(err);
});

obj.getRegistryaccountById('asda').then(function(registryaccount){
  console.log(registryaccount);
}, function(err){
  console.log(err);
});

obj.deleteRegistryaccountById('asda').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getRegistryaccountsManage().then(function(registryaccounts){
  console.log(registryaccounts);
}, function(err){
  console.log(err);
});

obj.searchRegistryaccounts({'q': 'amal'}).then(function(registryaccounts){
  console.log(registryaccounts);
}, function(err){
  console.log(err);
});

obj.reindexRegistryaccounts().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.getRegistryaccountJenkinsById('asda').then(function(registryaccount){
  console.log(registryaccount);
}, function(err){
  console.log(err);
});

obj.getRegistryaccountTypeById('asda').then(function(type){
  console.log(type);
}, function(err){
  console.log(err);
});

obj.getRegistryaccountCloudproviders().then(function(registryaccounts){
  console.log(registryaccounts);
}, function(err){
  console.log(err);
});

obj.createRegistryaccount({'name': 'amal-test'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.updateRegistryaccountById('2c91808651a95c4d0151f7398ab92c80', 
	{'name': 'amal-test renamed'}).then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.settingsEncrypt('dsfdsf', 'sdfdsf').then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});

obj.settingsRecreateMissingQueues().then(function(resp){
  console.log(resp);
}, function(err){
  console.log(err);
});
*/
