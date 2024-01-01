// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

/**
 * @title ILensModuleRegistrant
 * @author Paul Burke
 *
 * @notice An interface for registering modules in the module registry
 */
interface ILensModuleRegistrant {
    /**
     * @dev Registers the open action in the module registry
     * @return True if the module was registered, false otherwise
     */
    function registerModule() external returns (bool);

    /**
     * @dev Checks if the module is registered in the module registry
     * @return True if the module is registered, false otherwise
     */
    function isRegistered() external view returns (bool);
}
