/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * Author: Amal Francis <amalfra@gmail.com>
 */
var DchqRequest, DchqResponse;

DchqRequest = require("./dchq-request");
DchqResponse = require("./dchq-response");

function Dchq(config) {
  if (typeof config !== "object") {
    throw new Error("Username and Password must be provided");
  }
  if (typeof config.username !== "string") {
    throw new Error("Username must be provided");
  }
  if (typeof config.password !== "string") {
    throw new Error("Password must be provided");
  }

  this.request = new DchqRequest(config);
  this.routes_cats = ['blueprints', 'datacenters', 'builds', 'dockerservers', 'apps', 'usergroups', 'profiles', 'messages', 'users', 'plugins', 'cloudproviders', 'registryaccounts', 'settings'];
	this.routes = {};
	for (var i = 0; i < this.routes_cats.length; i++) {
		this.routes[this.routes_cats[i]] = require("./routes/" + this.routes_cats[i]);	
	}
}

/* Blueprints */
Dchq.prototype.getBlueprints = function() {
  return this.request.process(this.routes.blueprints.getBlueprints);
};

Dchq.prototype.createBlueprint = function(data) {
  return this.request.process(this.routes.blueprints.createBlueprint, data);
};

Dchq.prototype.getBlueprintsManage = function(data) {
  return this.request.process(this.routes.blueprints.getBlueprintsManage, data);
};

Dchq.prototype.getBlueprintsManageById = function(id) {
  return this.request.process(this.routes.blueprints.getBlueprintsManageById, null, {'id': id});
};

Dchq.prototype.searchBlueprintsLibraryPage = function(data) {
  return this.request.process(this.routes.blueprints.searchBlueprintsLibraryPage, data, {'q': data.q});
};

Dchq.prototype.getBlueprintById = function(id) {
  return this.request.process(this.routes.blueprints.getBlueprintById, null, {'id': id});
};

Dchq.prototype.updateBlueprintById = function(id, data) {
  return this.request.process(this.routes.blueprints.updateBlueprintById, data, {'id': id});
};

Dchq.prototype.deleteBlueprintById = function(id) {
  return this.request.process(this.routes.blueprints.deleteBlueprintById, null, {'id': id});
};

Dchq.prototype.starBlueprintById = function(id) {
  return this.request.process(this.routes.blueprints.starBlueprintById, null, {'id': id});
};

Dchq.prototype.unstarBlueprintById = function(id) {
  return this.request.process(this.routes.blueprints.unstarBlueprintById, null, {'id': id});
};

Dchq.prototype.getStarredBlueprints = function() {
  return this.request.process(this.routes.blueprints.getStarredBlueprints);
};

Dchq.prototype.getBlueprintYamlById = function(id) {
  return this.request.process(this.routes.blueprints.getBlueprintYamlById, null, {'id': id});
};

/* Datacenters */
Dchq.prototype.getDatacenters = function(id) {
  return this.request.process(this.routes.datacenters.getDatacenters);
};

Dchq.prototype.getDatacenterById = function(id) {
  return this.request.process(this.routes.datacenters.getDatacenterById, null, {'id': id});
};

Dchq.prototype.createDatacenter = function(data) {
  return this.request.process(this.routes.datacenters.createDatacenter, data);
};

Dchq.prototype.updateDatacenterById = function(id, data) {
  return this.request.process(this.routes.datacenters.updateDatacenterById, data, {'id': id});
};

Dchq.prototype.deleteDatacenterById = function(id) {
  return this.request.process(this.routes.datacenters.deleteDatacenterById, null, {'id': id});
};

Dchq.prototype.getDatacentersManage = function(id) {
  return this.request.process(this.routes.datacenters.getDatacentersManage);
};

Dchq.prototype.searchDatacenters = function(data) {
  return this.request.process(this.routes.datacenters.searchDatacenters, data, {'q': data.q});
};

/* Builds */
Dchq.prototype.getBuilds = function() {
  return this.request.process(this.routes.builds.getBuilds);
};

Dchq.prototype.getBuildsManage = function(data) {
  return this.request.process(this.routes.builds.getBuildsManage, data);
};

Dchq.prototype.getBuildsManageById = function(id) {
  return this.request.process(this.routes.builds.getBuildsManage, null, {'id': id});
};

Dchq.prototype.searchBuilds = function(data) {
  return this.request.process(this.routes.builds.searchBuilds, data, {'q': data.q});
};

Dchq.prototype.searchActiveEntitled = function(data) {
  return this.request.process(this.routes.builds.searchActiveEntitled, data, {'q': data.q});
};

Dchq.prototype.reindexBuilds = function() {
  return this.request.process(this.routes.builds.reindexBuilds);
};

Dchq.prototype.getBuildById = function(id) {
  return this.request.process(this.routes.builds.getBuildById, null, {'id': id});
};

Dchq.prototype.createBuild = function(data) {
  return this.request.process(this.routes.builds.createBuild, data);
};

Dchq.prototype.buildNow = function(data) {
  return this.request.process(this.routes.builds.buildNow, data);
};

Dchq.prototype.updateBuildById = function(id, data) {
  return this.request.process(this.routes.builds.updateBuildById, data, {'id': id});
};

Dchq.prototype.deleteBuildById = function(id) {
  return this.request.process(this.routes.builds.deleteBuildById, null, {'id': id});
};

/* Dockerservers */
Dchq.prototype.getDockerservers = function() {
  return this.request.process(this.routes.dockerservers.getDockerservers);
};

Dchq.prototype.getDockerserversManage = function(data) {
  return this.request.process(this.routes.dockerservers.getDockerserversManage, data);
};

Dchq.prototype.getDockerserverById = function(id) {
  return this.request.process(this.routes.dockerservers.getDockerserverById, null, {'id': id});
};

Dchq.prototype.getDockerserverStatusById = function(id) {
  return this.request.process(this.routes.dockerservers.getDockerserverStatusById, null, {'id': id});
};

Dchq.prototype.getDockerserverPingById = function(id) {
  return this.request.process(this.routes.dockerservers.getDockerserverPingById, null, {'id': id});
};

Dchq.prototype.createDockerserver = function(data) {
  return this.request.process(this.routes.dockerservers.createDockerserver, data);
};

Dchq.prototype.updateDockerserverById = function(id, data) {
  return this.request.process(this.routes.dockerservers.updateDockerserverById, data, {'id': id});
};

Dchq.prototype.deleteDockerserverById = function(id) {
  return this.request.process(this.routes.dockerservers.deleteDockerserverById, null, {'id': id});
};

Dchq.prototype.searchDockerservers = function(data) {
  return this.request.process(this.routes.dockerservers.searchDockerservers, data, {'q': data.q});
};

Dchq.prototype.reindexDockerservers = function(data) {
  return this.request.process(this.routes.dockerservers.reindexDockerservers);
};

Dchq.prototype.monitorDockerserverById = function(id) {
  return this.request.process(this.routes.dockerservers.monitorDockerserverById, null, {'id': id});
};

Dchq.prototype.getDockerserversManageById = function(id) {
  return this.request.process(this.routes.dockerservers.getDockerserversManageById, null, {'id': id});
};

/* Apps */
Dchq.prototype.getApps = function() {
  return this.request.process(this.routes.apps.getApps);
};

Dchq.prototype.getAppById = function(id) {
  return this.request.process(this.routes.apps.getAppById, null, {'id': id});
};

Dchq.prototype.getActiveApps = function(data) {
  return this.request.process(this.routes.apps.getActiveApps, data);
};

Dchq.prototype.getDestroyedApps = function(data) {
  return this.request.process(this.routes.apps.getDestroyedApps, data);
};

Dchq.prototype.deleteAllDestroyedApps = function() {
  return this.request.process(this.routes.apps.deleteAllDestroyedApps);
};

Dchq.prototype.updateAppById = function(id, data) {
  return this.request.process(this.routes.apps.updateAppById, data, {'id': id});
};

Dchq.prototype.deployAppById = function(id) {
  return this.request.process(this.routes.apps.deployAppById, null, {'id': id});
};

Dchq.prototype.getAppsDeploy = function() {
  return this.request.process(this.routes.apps.getAppsDeploy);
};

Dchq.prototype.stopAppById = function(id) {
  return this.request.process(this.routes.apps.stopAppById, null, {'id': id});
};

Dchq.prototype.startAppById = function(id) {
  return this.request.process(this.routes.apps.startAppById, null, {'id': id});
};

Dchq.prototype.restartAppById = function(id) {
  return this.request.process(this.routes.apps.restartAppById, null, {'id': id});
};

Dchq.prototype.destroyAppById = function(id) {
  return this.request.process(this.routes.apps.destroyAppById, null, {'id': id});
};

Dchq.prototype.getAppBackupsById = function(id) {
  return this.request.process(this.routes.apps.getAppBackupsById, null, {'id': id});
};

Dchq.prototype.createAppBackupById = function(id, data) {
  return this.request.process(this.routes.apps.createAppBackupById, data, {'id': id});
};

Dchq.prototype.createAppBackupNowById = function(id, data) {
  return this.request.process(this.routes.apps.createAppBackupNowById, data, {'id': id});
};

Dchq.prototype.getAppPluginsById = function(id) {
  return this.request.process(this.routes.apps.getAppPluginsById, null, {'id': id});
};

Dchq.prototype.createAppPluginById = function(id, data) {
  return this.request.process(this.routes.apps.createAppPluginById, data, {'id': id});
};

Dchq.prototype.createAppPluginNowById = function(id, data) {
  return this.request.process(this.routes.apps.createAppPluginNowById, data, {'id': id});
};

Dchq.prototype.appRollbackById = function(id) {
  return this.request.process(this.routes.apps.appRollbackById, null, {'id': id});
};

Dchq.prototype.appRollbackNowById = function(id, data) {
  return this.request.process(this.routes.apps.appRollbackNowById, data, {'id': id});
};

Dchq.prototype.getAppScaleOutCreateById = function(id) {
  return this.request.process(this.routes.apps.getAppScaleOutCreateById, null, {'id': id});
};

Dchq.prototype.createAppScaleOutCreateById = function(id) {
  return this.request.process(this.routes.apps.createAppScaleOutCreateById, null, {'id': id});
};

Dchq.prototype.createAppScaleOutCreateById = function(id, data) {
  return this.request.process(this.routes.apps.createAppScaleOutCreateNowById, data, {'id': id});
};

Dchq.prototype.getAppScaleInCreateById = function(id) {
  return this.request.process(this.routes.apps.getAppScaleInCreateById, null, {'id': id});
};

Dchq.prototype.createAppScaleInById = function(id, data) {
  return this.request.process(this.routes.apps.createAppScaleInById, data, {'id': id});
};

Dchq.prototype.createAppScaleInNowById = function(id, data) {
  return this.request.process(this.routes.apps.createAppScaleInNowById, data, {'id': id});
};

Dchq.prototype.searchApps = function(data) {
  return this.request.process(this.routes.apps.searchApps, data, {'q': data.q});
};

Dchq.prototype.appMonitorById = function(id, data) {
  return this.request.process(this.routes.apps.appMonitorById, data, {'id': id});
};

/* Usergroups */
Dchq.prototype.getUsergroups = function(data) {
  return this.request.process(this.routes.usergroups.getUsergroups, data);
};

Dchq.prototype.getUsergroupById = function(id) {
  return this.request.process(this.routes.usergroups.getUsergroupById, null, {'id': id});
};

Dchq.prototype.createUsergroup = function(data) {
  return this.request.process(this.routes.usergroups.createUsergroup, data);
};

Dchq.prototype.updateUsergroupById = function(id, data) {
  return this.request.process(this.routes.usergroups.updateUsergroupById, data, {'id': id});
};

Dchq.prototype.deleteUsergroupById = function(id) {
  return this.request.process(this.routes.usergroups.deleteUsergroupById, null, {'id': id});
};

Dchq.prototype.searchUsergroups = function(data) {
  return this.request.process(this.routes.usergroups.searchUsergroups, data, {'q': data.q});
};

/* Profiles */
Dchq.prototype.getProfiles = function(data) {
  return this.request.process(this.routes.profiles.getProfiles, data);
};

Dchq.prototype.getProfileById = function(id, data) {
  return this.request.process(this.routes.profiles.getProfileById, data, {'id': id});
};

Dchq.prototype.updateProfileById = function(id, data) {
  return this.request.process(this.routes.profiles.updateProfileById, data, {'id': id});
};

Dchq.prototype.deleteProfileById = function(id) {
  return this.request.process(this.routes.profiles.deleteProfileById, null, {'id': id});
};

Dchq.prototype.createProfile = function(data) {
  return this.request.process(this.routes.profiles.createProfile, data);
};

Dchq.prototype.searchProfiles = function(data) {
  return this.request.process(this.routes.profiles.searchProfiles, data, {'q': data.q});
};

/* Messages */
Dchq.prototype.searchMessages = function(data) {
  return this.request.process(this.routes.messages.searchMessages, data, {'q': data.q});
};

Dchq.prototype.getUnreadMessages = function(data) {
  return this.request.process(this.routes.messages.getUnreadMessages, data);
};

Dchq.prototype.getOpenMessages = function(data) {
  return this.request.process(this.routes.messages.getOpenMessages, data);
};

Dchq.prototype.getMessageById = function(id) {
  return this.request.process(this.routes.messages.getMessageById, null, {'id': id});
};

Dchq.prototype.archiveMessageById = function(id) {
  return this.request.process(this.routes.messages.archiveMessageById, null, {'id': id});
};

Dchq.prototype.getArchivedMessages = function(data) {
  return this.request.process(this.routes.messages.getArchivedMessages, data);
};

Dchq.prototype.deleteMessageById = function(id) {
  return this.request.process(this.routes.messages.deleteMessageById, null, {'id': id});
};

/* Users */
Dchq.prototype.getUsers = function(data) {
  return this.request.process(this.routes.users.getUsers, data);
};

Dchq.prototype.getUserById = function(id) {
  return this.request.process(this.routes.users.getUserById, null, {'id': id});
};

Dchq.prototype.updateUserById = function(id, data) {
  return this.request.process(this.routes.users.updateUserById, data, {'id': id});
};

Dchq.prototype.deleteUserById = function(id) {
  return this.request.process(this.routes.users.deleteUserById, null, {'id': id});
};

Dchq.prototype.createUser = function(data) {
  return this.request.process(this.routes.users.createUser, data);
};

Dchq.prototype.searchUsers = function(data) {
  return this.request.process(this.routes.users.searchUsers, data, {'q': data.q});
};

Dchq.prototype.updateUserProfileById = function(id, data) {
  return this.request.process(this.routes.users.updateUserProfileById, data, {'id': id});
};

Dchq.prototype.getUserLoginStatus = function() {
  return this.request.process(this.routes.users.getUserLoginStatus);
};

Dchq.prototype.signupUser = function(data) {
  return this.request.process(this.routes.users.signupUser, data);
};

Dchq.prototype.signupTenantUser = function(data) {
  return this.request.process(this.routes.users.signupTenantUser, data);
};

Dchq.prototype.searchUserByEmail = function(email) {
  return this.request.process(this.routes.users.searchUserByEmail, {'email': email}, {'email': email});
};

Dchq.prototype.generateUserPasswordResetByEmail = function(email) {
  return this.request.process(this.routes.users.generateUserPasswordResetByEmail, {'email': email}, {'email': email});
};

Dchq.prototype.resetUserPasswordResetById = function(id, password) {
  return this.request.process(this.routes.users.resetUserPasswordResetById, {'newPassword': password}, {'id': id});
};

/* Plugins */
Dchq.prototype.createPlugin = function(data) {
  return this.request.process(this.routes.plugins.createPlugin, data);
};

Dchq.prototype.getPluginsManage = function(data) {
  return this.request.process(this.routes.plugins.getPluginsManage, data);
};

Dchq.prototype.getPluginManageById = function(id) {
  return this.request.process(this.routes.plugins.getPluginManageById, null, {'id': id});
};

Dchq.prototype.getPluginsStarred = function(data) {
  return this.request.process(this.routes.plugins.getPluginsStarred, data);
};

Dchq.prototype.updatePluginById = function(id, data) {
  return this.request.process(this.routes.plugins.updatePluginById, data, {'id': id});
};

Dchq.prototype.deletePluginById = function(id) {
  return this.request.process(this.routes.plugins.deletePluginById, null, {'id': id});
};

Dchq.prototype.searchPlugins = function(data) {
  return this.request.process(this.routes.plugins.searchPlugins, data, {'q': data.q});
};

Dchq.prototype.reindexPlugins = function() {
  return this.request.process(this.routes.plugins.reindexPlugins);
};

Dchq.prototype.searchActiveEntitledPlugins = function(data) {
  return this.request.process(this.routes.plugins.searchActiveEntitledPlugins, data, {'q': data.q});
};

Dchq.prototype.starPluginById = function(id) {
  return this.request.process(this.routes.plugins.starPluginById, null, {'id': id});
};

Dchq.prototype.unstarPluginById = function(id) {
  return this.request.process(this.routes.plugins.unstarPluginById, null, {'id': id});
};

Dchq.prototype.getPlugins = function(data) {
  return this.request.process(this.routes.plugins.getPlugins, data);
};

/* Cloudproviders */
Dchq.prototype.getCloudproviderRegionsById = function(id, data) {
  return this.request.process(this.routes.cloudproviders.getCloudproviderRegionsById, data, {'id': id});
};

Dchq.prototype.getCloudproviderMachinetypesById = function(id, data) {
  return this.request.process(this.routes.cloudproviders.getCloudproviderMachinetypesById, data, {'id': id});
};

Dchq.prototype.getCloudproviderMachineimagesByIdRegion = function(id, region, data) {
  return this.request.process(this.routes.cloudproviders.getCloudproviderMachineimagesByIdRegion, data, {'id': id, 'region': region});
};

Dchq.prototype.getCloudproviderNetworksByIdRegion = function(id, region, data) {
  return this.request.process(this.routes.cloudproviders.getCloudproviderNetworksByIdRegion, data, {'id': id, 'region': region});
};

Dchq.prototype.getCloudproviderSecuritygroupsByIdRegion = function(id, region, data) {
  return this.request.process(this.routes.cloudproviders.getCloudproviderSecuritygroupsByIdRegion, data, {'id': id, 'region': region});
};

/* Registryaccounts */
Dchq.prototype.getRegistryaccounts = function() {
  return this.request.process(this.routes.registryaccounts.getRegistryaccounts);
};

Dchq.prototype.getRegistryaccountById = function(id) {
  return this.request.process(this.routes.registryaccounts.getRegistryaccountById, null, {'id': id});
};

Dchq.prototype.deleteRegistryaccountById = function(id) {
  return this.request.process(this.routes.registryaccounts.deleteRegistryaccountById, null, {'id': id});
};

Dchq.prototype.getRegistryaccountsManage = function(data) {
  return this.request.process(this.routes.registryaccounts.getRegistryaccountsManage, data);
};

Dchq.prototype.searchRegistryaccounts = function(data) {
  return this.request.process(this.routes.registryaccounts.searchRegistryaccounts, data, {'q': data.q});
};

Dchq.prototype.reindexRegistryaccounts = function() {
  return this.request.process(this.routes.registryaccounts.reindexRegistryaccounts);
};

Dchq.prototype.getRegistryaccountJenkinsById = function(id) {
  return this.request.process(this.routes.registryaccounts.getRegistryaccountJenkinsById, null, {'id': id});
};

Dchq.prototype.getRegistryaccountTypeById = function(id) {
  return this.request.process(this.routes.registryaccounts.getRegistryaccountTypeById, null, {'id': id});
};

Dchq.prototype.getRegistryaccountCloudproviders = function() {
  return this.request.process(this.routes.registryaccounts.getRegistryaccountCloudproviders);
};

Dchq.prototype.createRegistryaccount = function(data) {
  return this.request.process(this.routes.registryaccounts.createRegistryaccount, data);
};

Dchq.prototype.updateRegistryaccountById = function(id, data) {
  return this.request.process(this.routes.registryaccounts.updateRegistryaccountById, data, {'id': id});
};

/* Settings */
Dchq.prototype.settingsEncrypt = function(key, text) {
  return this.request.process(this.routes.settings.settingsEncrypt, {'key': key, 'text': text}, {'key': key, 'text': text});
};

Dchq.prototype.settingsRecreateMissingQueues = function() {
  return this.request.process(this.routes.settings.settingsRecreateMissingQueues);
};

module.exports = Dchq;
